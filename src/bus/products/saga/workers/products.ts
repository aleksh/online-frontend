
import { call, put, select } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";


export function* products({ payload }: any) {

    try {
        yield put(productsActions.updatePageCount(payload.page))
        const state = yield select(getItems);

        let response;


        if (state.search.length > 0) {
            response = yield call(api.products.search, { ...payload, search: state.search });
            console.log("search");
        } else {

            if (state.selectedDepartment && !state.selectedCategory) {
                response = yield call(api.products.productsInDepartment, { ...payload, department_id: state.selectedDepartment.department_id });
            }

            if (state.selectedCategory) {
                response = yield call(api.products.productsInCategory, { ...payload, category_id: state.selectedCategory.category_id });
            }

            if (!state.selectedDepartment && !state.selectedCategory) {
                response = yield call(api.products.fetch, payload);
            }
        }

        const { data: products, message, status } = response;

        if (status !== 200 && status !== 201) {
            throw new Error(message);
        }

        yield put(productsActions.setProducts(products));

        if (state.search.length > 0) {
            // clean selected department and selected category
        }

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}


const getItems = (state: any) => (
    {
        selectedDepartment: state.departments.get("selectedDepartment"),
        selectedCategory: state.categories.get("selectedCategory"),
        search: state.products.get("search"),
    }
);
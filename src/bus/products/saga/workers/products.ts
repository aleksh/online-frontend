
import { call, put, select } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";


export function* products({ payload }: any) {

    console.log(payload);

    try {
        yield put(productsActions.updatePageCount(payload.page))
        const state = yield select(getItems);
        console.log(state);

        let response;
               

        if(state.selectedDepartment && !state.selectedCategory){
            console.log("get PRODUCTS BY DEPARTMENT");
            response = yield call(api.products.productsInDepartment, {...payload, department_id:state.selectedDepartment.department_id});
        }

        if(state.selectedCategory){
            console.log("get PRODUCTS BY CATEGORIES");
            response = yield call(api.products.productsInCategory, {...payload, category_id:state.selectedCategory.category_id});
        }

        if(!state.selectedDepartment && !state.selectedCategory){
            console.log("just get ALL PRODUCTS")
            response = yield call(api.products.fetch, payload);
        }
        console.log(response)
        const { data: products, message, status } = response;

        console.log("in Saga products");
        console.log(products);
        console.log(status);
        console.log(message);
        if (status !== 200 && status !== 201) {
            throw new Error(message);
        }

        yield put(productsActions.setProducts(products));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}


const getItems = (state: any) => (
    {
        selectedDepartment: state.departments.get("selectedDepartment"),
        selectedCategory: state.categories.get("selectedCategory"),
    }
);
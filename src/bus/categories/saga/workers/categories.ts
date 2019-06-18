
import { call, put, select } from "redux-saga/effects";
import { api } from "../../../../REST";
import { CANCEL_REQUEST } from "../../../../REST/config";
import { modalActions } from "../../../modal/actions";
import { categoriesActions } from "../../actions";


export function* categories() {
    try {
        yield put(categoriesActions.clearSelectedCategory());
        const state = yield select(getDepartment);

        let response;

        if (state.selectedDepartment) {
            response = yield call(api.categories.categoriesInDepartment, state.selectedDepartment.department_id);
        } else {
            response = yield call(api.categories.fetch);
        }

        const { data: categories, message, status } = response;

        if (status !== 200) {
            throw new Error(categories.error.message);
        }

        yield put(categoriesActions.setCategories(categories.rows || categories));

    } catch (error) {
        if (error.message !== CANCEL_REQUEST) {
            yield put(modalActions.showError(error.message));
        }
    }
}


const getDepartment = (state: any) => (
    {
        selectedDepartment: state.departments.get("selectedDepartment"),
    }
);
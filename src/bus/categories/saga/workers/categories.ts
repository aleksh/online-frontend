
import { call, put, apply } from "redux-saga/effects";
import { modalActions } from "../../../modal/actions";
import { api } from "../../../../REST";
import { categoriesActions } from "../../actions";


export function* categories() {
    try {                        

        const { data: categories, message, status } =  yield call(api.categories.fetch);         

        console.log("in Saga");
        console.log(categories);
        if (status !== 200) {
            throw new Error(message);
        }

        yield put(categoriesActions.setCategories(categories.rows));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

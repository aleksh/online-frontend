
import { put } from "redux-saga/effects";
import { ITEMS_PER_PAGE } from "../../../../utils/Constants";
import { categoriesActions } from "../../../categories/actions";
import { departmentsActions } from "../../../departments/actions";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";


export function* cleanSelectedItems() {
    try {
        yield put(productsActions.setSearch(""));
        yield put(departmentsActions.cleanSelectedDepartment());
        yield put(categoriesActions.cleanSelectedCategory());
        yield put(categoriesActions.categoriesAsync());
        yield put(productsActions.productsAsync({ page: 1, limit: ITEMS_PER_PAGE }));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}


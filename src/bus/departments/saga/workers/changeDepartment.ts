
import { put } from "redux-saga/effects";
import { ITEMS_PER_PAGE } from "../../../../utils/Constants";
import { categoriesActions } from "../../../categories/actions";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../../products/actions";
import { departmentsActions } from "../../actions";


export function* changeDepartment({ payload: item }: any) {
    try {
        yield put(productsActions.setSearch());
        yield put(departmentsActions.setSelectedDepartment(item));
        yield put(categoriesActions.categoriesAsync());
        yield put(productsActions.productsAsync({ page: 1, limit: ITEMS_PER_PAGE }));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

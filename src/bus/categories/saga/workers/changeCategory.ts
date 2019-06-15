
import { put } from "redux-saga/effects";
import { ITEMS_PER_PAGE } from "../../../../utils/Constants";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../../products/actions";
import { categoriesActions } from "../../actions";


export function* changeCategory({ payload }: any) {
    try {
        yield put(productsActions.setSearch()); // clean search 
        yield put(categoriesActions.setSelectedCategory(payload));
        yield put(productsActions.productsAsync({ page: 1, limit: ITEMS_PER_PAGE }));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}
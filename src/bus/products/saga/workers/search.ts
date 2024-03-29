
import { put } from "redux-saga/effects";
import { CANCEL_REQUEST } from "../../../../REST/config";
import { ITEMS_PER_PAGE } from "../../../../utils/Constants";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../../products/actions";


export function* search({ payload }: any) {
    try {

        yield put(productsActions.setSearch(payload));
        yield put(productsActions.productsAsync({ page: 1, limit: ITEMS_PER_PAGE }));

    } catch (error) {
        if (error.message !== CANCEL_REQUEST) {
            yield put(modalActions.showError(error.message));
        }
    }
}

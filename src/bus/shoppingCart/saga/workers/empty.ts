
import { call, put, select } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { shoppingCartActions } from "../../../shoppingCart/actions";
import { CANCEL_REQUEST } from "../../../../REST/config";

export function* empty() {
    try {
        let cart_id = yield select(getCartId);
        yield put(shoppingCartActions.emptyCart());

        const { data, status } = yield call(api.shoppingCart.empty, cart_id);

        if (status !== 200 && status !== 201 && status !== 204) {
            throw new Error(data.error.message);
        }

    } catch (error) {
        if (error.message !== CANCEL_REQUEST) {
            yield put(modalActions.showError(error.message));
        }
    }
}


const getCartId = (state: any) => state.shoppingCart.get("cart_id");
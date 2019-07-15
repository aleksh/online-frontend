
import { call, put, select } from "redux-saga/effects";
import { api } from "../../../../REST";
import { CANCEL_REQUEST } from "../../../../REST/config";
import { modalActions } from "../../../modal/actions";
import { shoppingCartActions } from "../../../shoppingCart/actions";



export function* remove({ payload }: any) {
    try {
        let cart_id = yield select(getCartId);

        yield call(api.shoppingCart.cancelTotalAmount);
        yield put(shoppingCartActions.removeItem(payload));
        const { data, status } = yield call(api.shoppingCart.removeProduct, payload);


        if (status !== 200) {
            throw new Error(data.error.message);
        }

        // also need calculate total in reducer after remove Item
        yield put(shoppingCartActions.getTotalAsync(cart_id));

    } catch (error) {
        if (error.message !== CANCEL_REQUEST) {
            yield put(modalActions.showError(error.message));
        }
    }
}


const getCartId = (state: any) => state.shoppingCart.get("cart_id");
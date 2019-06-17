
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { shoppingCartActions } from "../../../shoppingCart/actions";


export function* generateUniqId() {
    try {

        const { data, status } = yield call(api.shoppingCart.generateUniqueId);

        console.log(data);
        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield put(shoppingCartActions.setCartId(data.cart_id));
        return data.cart_id;


    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

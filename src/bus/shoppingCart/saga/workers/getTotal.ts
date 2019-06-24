
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { shoppingCartActions } from "../../../shoppingCart/actions";
import { CANCEL_REQUEST } from "../../../../REST/config";


export function* getTotal({payload:cart_id}:any) {
    try {

        const { data, status } = yield call(api.shoppingCart.totalAmount, cart_id);
        
        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield put(shoppingCartActions.setTotal(data.total_amount));        

    } catch (error) {
        if (error.message !== CANCEL_REQUEST) {
            yield put(modalActions.showError(error.message));
        }
    }
}

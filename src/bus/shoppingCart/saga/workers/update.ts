
import { call, put, select } from "redux-saga/effects";
import { api } from "../../../../REST";
import { CANCEL_REQUEST } from "../../../../REST/config";
import Utils from "../../../../utils/Utils";
import { modalActions } from "../../../modal/actions";
import { shoppingCartActions } from "../../../shoppingCart/actions";



export function* update({ payload }: any) {
    try {

        yield put(shoppingCartActions.updateItem(payload));
        yield call(api.shoppingCart.cancelTotalAmount);
        
        const { data, status } = yield call(api.shoppingCart.update, payload);

        if (status !== 200) {
            throw new Error(data.error.message);
        }        

        const count = yield call(Utils.GetProductsCount, data);
        yield put(shoppingCartActions.setItems({ items: data, count }));

        let cart_id = yield select(getCartId);
        yield put(shoppingCartActions.getTotalAsync(cart_id));

    } catch (error) {

        if (error.message !== CANCEL_REQUEST) {
            yield put(modalActions.showError(error.message));
        }

    }
}


const getCartId = (state: any) => state.shoppingCart.get("cart_id");
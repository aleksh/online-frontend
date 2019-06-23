
import { call, put, select } from "redux-saga/effects";
import { api } from "../../../../REST";
import Utils from "../../../../utils/Utils";
import { modalActions } from "../../../modal/actions";
import { shoppingCartActions } from "../../../shoppingCart/actions";
import { generateUniqId } from "./index";



export function* add({ payload }: any) {
    try {
        console.log(payload);
        let cart_id = yield select(getCartId);

        //remote it for test        
       /* cart_id = "1xh7q2z4qajwzr8gde";
        yield call(api.setCardId, cart_id);
        yield put(shoppingCartActions.setCartId(cart_id));*/
        /////////////////////////

        if (!cart_id) {
            cart_id = yield call(generateUniqId);
            yield call(api.setCardId, cart_id);
        }

        const { data, status } = yield call(api.shoppingCart.add, { ...payload, cart_id });
        console.log(data);

        if (status !== 200) {
            throw new Error(data.error.message);
        }


        const count = yield call(Utils.GetProductsCount, data);

        yield put(shoppingCartActions.setItems({ items: data, count }));
        yield put(shoppingCartActions.getTotalAsync(cart_id));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}


const getCartId = (state: any) => state.shoppingCart.get("cart_id");
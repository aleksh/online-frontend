
import { call, put, select } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { shoppingCartActions } from "../../../shoppingCart/actions";
import { generateUniqId } from "./index";



export function* add({ payload }: any) {
    try {
        console.log(payload);
        let cart_id = yield select(getCartId);

        cart_id = "1xh7q2z4qajwzr8gde";
        if (!cart_id) {
            cart_id = yield call(generateUniqId);
        }

        const { data, message, status } = yield call(api.shoppingCart.add, { ...payload, cart_id });
        console.log(data);

        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield put(shoppingCartActions.setItems({items:data, count: data.length}));
        yield put(shoppingCartActions.getTotalAsync(cart_id));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}


const getCartId = (state: any) => state.shoppingCart.get("cart_id");
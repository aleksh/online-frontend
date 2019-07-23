import { apply, call, put, select } from 'redux-saga/effects';
import { history } from '../../../../init/middleware/core';
import { Path } from '../../../../navigation/path';
import { api } from '../../../../REST';
import { modalActions } from '../../../modal/actions';
import { shoppingCartActions } from '../../../shoppingCart/actions';


export function* createOrder() {
    try {
        const state = yield select(getItems);
        const { data, status } = yield call(api.order.createOrder, state, api.getToken());

        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield call(api.setCardId, "");
        yield apply(history, history.push, [Path.orders as any]);
        yield put(shoppingCartActions.emptyCart());

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}


const getItems = (state: any) => (
    {
        cart_id: state.shoppingCart.get("cart_id"),
        shipping_id: state.user.get("shipping_region_id") || 1,
        tax_id: 1,
    }
);
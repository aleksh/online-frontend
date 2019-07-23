import { call, put, select } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { modalActions } from '../../../modal/actions';


export function* createOrder() {
    try {
        const state = yield select(getItems);
        const { data, status } = yield call(api.order.createOrder, state, api.getToken());
 
        console.log(data);

         if (status !== 200) {
             throw new Error(data.error.message);
         }

        yield call(api.setCardId, "");
        //yield put(shippingActions.setTaxes(data));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}


const getItems = (state: any) => (
    {
        cart_id: state.shoppingCart.get("cart_id"),
        shipping_id: state.user.get("shipping_region_id"),
        tax_id: 1,
    }
);
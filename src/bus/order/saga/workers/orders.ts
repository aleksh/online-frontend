import { call, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { modalActions } from '../../../modal/actions';
import { orderActions } from '../../actions';


export function* orders() {
    try {
        const { data, status } = yield call(api.order.orders, api.getToken());        

        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield put(orderActions.setOrders(data));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}
import { call, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { modalActions } from '../../../modal/actions';
import { shippingActions } from '../../actions';


export function* taxes() {
    try {
        const { data, status } = yield call(api.shipping.taxes);

        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield put(shippingActions.setTaxes(data));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

import { call, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { modalActions } from '../../../modal/actions';
import { shippingActions } from '../../actions';


export function* regions() {
    try {
        const { data, status } = yield call(api.shipping.regions);

        if (status !== 200) {
            throw new Error(data.error.message);
        }
        
        yield put(shippingActions.setRegions(data));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

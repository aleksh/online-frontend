import { apply, call, put } from 'redux-saga/effects';
import { MODAL_TYPES } from '../../../../components/Modals/Modals';
import { history } from '../../../../init/middleware/core';
import { Path } from '../../../../navigation/path';
import { api } from '../../../../REST';
import { modalActions } from '../../../modal/actions';

export function* chargeOrder({ payload }: any) {
    try {
        const { data, status } = yield call(api.order.charge, payload, api.getToken());

        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield put(modalActions.showModal({
            modalType: MODAL_TYPES.INFO,
            modalProps: {
                message: "Payment success"
            }
        }));

        yield apply(history, history.push, [Path.orders as any]);

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}
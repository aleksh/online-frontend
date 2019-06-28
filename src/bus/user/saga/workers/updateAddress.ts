
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../../user/actions";


export function* updateAddress({ payload }: any) {

    try {

        const { data, status } = yield call(api.user.updateAddress, payload, api.getToken());

        if (status !== 200) {
            throw new Error(data.error.message);
        }
                
        yield put(userActions.setUser(data));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}
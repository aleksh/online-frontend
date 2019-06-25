
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../../user/actions";


export function* updateProfile({ payload }: any) {

    try {

        const { data, status } = yield call(api.user.updateProfile, payload, api.getToken());

        console.log(data);
        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield call(api.setToken, data.accessToken);
        yield put(userActions.setUser(data.customer));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}
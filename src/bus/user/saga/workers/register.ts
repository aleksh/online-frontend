
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST/api";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../../user/actions";


export function* register({ payload }: any) {

    try {
        const { data, status } = yield call(api.user.register, payload);

        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield call(api.setToken, data.accessToken);
        yield put(userActions.setUser(data.customer));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

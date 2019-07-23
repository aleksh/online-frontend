
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST/api";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../actions";


export function* loginFacebook({ payload }: any) {

    try {
        const { data, status } = yield call(api.user.facebook, payload);

        if (status !== 200) {
            throw new Error(data.error.message);
        }

        yield call(api.setToken, data.accessToken);
        yield put(userActions.setUser(data.customer));
        yield put(modalActions.hideModal());

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

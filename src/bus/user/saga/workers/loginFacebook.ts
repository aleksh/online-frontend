
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST/api";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../actions";


export function* loginFacebook({ payload }: any) {

    try {
        console.log("payload FACEBOOK");
        console.log(payload);
        const { data, status } = yield call(api.user.facebook, payload);

        console.log("loginFacebook");
        console.log(data);
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

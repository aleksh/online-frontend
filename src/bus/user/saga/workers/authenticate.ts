
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST/api";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../actions";


export function* authenticate() {

    try {

        const token = yield call(api.geToken);
        if (token && token.length) {
            const { data, status } = yield call(api.user.authenticate, token);

            if (status !== 200) {
                yield put(userActions.logoutAsync());
            } else {
                yield put(userActions.setUser(data));
            }
        }

    } catch (error) {
        // we don't need 
       // yield put(modalActions.showError(error.message));
    }
}


import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../actions";


export function* logout() {
    try {

        yield call(api.removeToken);
        yield put(userActions.logout());

    } catch (error) {
        yield put(modalActions.showError('Error logout saga'));
    }
}
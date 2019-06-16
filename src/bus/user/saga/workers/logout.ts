
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../actions";


export function* logout() {
    try {

        console.log("logout saga")
        yield call(api.removeToken);
        console.log("logout saga 11")
        yield put(userActions.logout());

    } catch (error) {
        yield put(modalActions.showError('Error logout saga'));
    }
}
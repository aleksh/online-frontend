
import { apply, put } from "redux-saga/effects";
import { modalActions } from "../../../modal/actions";


export function* login({ payload }: any) {
    try {
        //yield apply({});
    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

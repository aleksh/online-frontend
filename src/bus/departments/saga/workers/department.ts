
import { put } from "redux-saga/effects";
import { modalActions } from "../../../modal/actions";


export function* department() {
    try {

    } catch (error) {
        yield put(modalActions.showError('Error department saga'));
    }
}
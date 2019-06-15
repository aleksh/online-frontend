
import { put } from "redux-saga/effects";
import { modalActions } from "../../../modal/actions";


export function* register({ payload }: any) {
    try {
        console.log('register saga');
        console.log(payload);
    } catch (error) {
        yield put(modalActions.showError('Error logout saga'));
    }
}

import { put } from "redux-saga/effects";
import { modalActions } from "../../../modal/actions";


export function* updateProfile({ payload: { file, displayName, loadedPhoto } }: any) {
    try {

        // yield put(userActions.profileUpdated(data));

    } catch (error) {
        yield put(modalActions.showError('Error logout saga => ' + error.message));
    }
}
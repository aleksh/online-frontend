
import { call, put } from "redux-saga/effects";
import { modalActions } from "../../../modal/actions";
import { userActions } from "../../../user/actions";


export function* updateProfile({ payload: { file, displayName, loadedPhoto } }: any) {
    try {

        yield put(userActions.profileUpdating());
        
        
       // yield put(userActions.profileUpdated(data));

    } catch (error) {
        yield put(userActions.profileUpdateError());
        yield put(modalActions.showError('Error logout saga => ' + error.message));
    }
}
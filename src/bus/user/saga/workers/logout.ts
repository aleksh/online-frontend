
import { put } from "redux-saga/effects";
import { modalActions } from "../../../modal/actions";


export function* logout() {
    try {        
        
    } catch (error) {
        yield put(modalActions.showError('Error logout saga'));
    }
}
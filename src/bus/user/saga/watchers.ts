// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { login, logout, updateProfile } from "./workers";


function* watchLogin() {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

function* watchLogout() {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}

function* watchUpdateProfile() {
    yield takeEvery(types.UPDATE_PROFILE_ASYNC, updateProfile);
}

export function* watchUser() {
    yield all([call(watchLogin), call(watchLogout), call(watchUpdateProfile)]);
}
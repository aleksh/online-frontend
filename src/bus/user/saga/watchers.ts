// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { login, logout, register, authenticate } from "./workers";


function* watchLogin() {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

function* watchRegister() {
    yield takeEvery(types.REGISTER_ASYNC, register);
}

function* watchLogout() {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}

function* watchAuth() {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}


export function* watchUser() {
    yield all([call(watchLogin), call(watchLogout), call(watchRegister), call(watchAuth)]);
}
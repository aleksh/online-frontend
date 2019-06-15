// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { changeDepartment, departments } from "./workers";


function* watchDepartmentsAsync() {
    yield takeEvery(types.FETCH_DEPARTMENTS_ASYNC, departments);
}

function* watchChangeDepartment() {
    yield takeEvery(types.CHANGE_DEPARTMENT, changeDepartment);
}

export function* watchDepartments(): any {
    yield all([call(watchDepartmentsAsync), call(watchChangeDepartment)]);
}
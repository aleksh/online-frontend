// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { department, departments } from "./workers";


function* watchDepartmentsAsync() {
    yield takeEvery(types.FETCH_DEPARTMENTS_ASYNC, departments);
}

function* watchDepartmentAsync() {
    yield takeEvery(types.FETCH_DEPARTMENT_ASYNC, department);
}

export function* watchDepartments(): any {
    yield all([call(watchDepartmentsAsync), call(watchDepartmentAsync)]);
}
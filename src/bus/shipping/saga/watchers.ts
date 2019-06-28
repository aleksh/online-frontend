import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from "../types";
import { regions } from './workers';


function* watchRegions() {
    yield takeEvery(types.FETCH_REGIONS_ASYNC, regions);
}

export function* watchShipping() {
    yield all([call(watchRegions)]);
}

import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from "../types";
import { regions, taxes } from './workers';


function* watchRegions() {
    yield takeEvery(types.FETCH_REGIONS_ASYNC, regions);
}

function* watchTaxes() {
    yield takeEvery(types.FETCH_TAXES_ASYNC, taxes);
}

export function* watchShipping() {
    yield all([call(watchRegions), call(watchTaxes)]);
}

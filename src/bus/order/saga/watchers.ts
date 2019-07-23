import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from "../types";
import { chargeOrder, createOrder, orders } from './workers';


function* watchCreateOrder() {
    yield takeEvery(types.CREATE_ORDER_ASYNC, createOrder);
}

function* watchFetchOrders() {
    yield takeEvery(types.FETCH_ORDERS_ASYNC, orders);
}

function* watchChargeOrder() {
    yield takeEvery(types.CHARGE_ORDER_ASYNC, chargeOrder);
}


export function* watchOrders() {
    yield all([call(watchCreateOrder), call(watchFetchOrders), call(watchChargeOrder)]);
}
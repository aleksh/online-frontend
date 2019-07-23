import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from "../types";
import { createOrder, orders } from './workers';


function* watchCreateOrder() {
    yield takeEvery(types.CREATE_ORDER_ASYNC, createOrder);
}

function* watchFetchOrders() {
    yield takeEvery(types.FETCH_ORDERS_ASYNC, orders);
}

export function* watchOrders() {
    yield all([call(watchCreateOrder), call(watchFetchOrders)]);
}
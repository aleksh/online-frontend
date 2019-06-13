// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { product, products } from "./workers";


function* watchProductsAsync() {
    yield takeEvery(types.FETCH_PRODUCTS_ASYNC, products);
}

function* watchProductAsync() {
    yield takeEvery(types.FETCH_PRODUCT_ASYNC, product);
}

export function* watchProducts(): any {
    yield all([call(watchProductsAsync), call(watchProductAsync)]);
}
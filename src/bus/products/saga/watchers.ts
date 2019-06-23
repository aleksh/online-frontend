// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { cleanSelectedItems, product, products, search } from "./workers";


function* watchProductsAsync() {
    yield takeEvery(types.FETCH_PRODUCTS_ASYNC, products);
}

function* watchProductAsync() {
    yield takeEvery(types.FETCH_PRODUCT_ASYNC, product);
}

function* watchSearchAsync() {
    yield takeEvery(types.SEARCH_ASYNC, search);
}

function* watchCleanSelectedItems() {
    yield takeEvery(types.CLEAN_SELECTED_ITEMS, cleanSelectedItems);
}

export function* watchProducts(): any {
    yield all([call(watchProductsAsync), call(watchProductAsync), call(watchSearchAsync), call(watchCleanSelectedItems)]);
}
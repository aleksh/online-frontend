// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { add, getTotal } from "./workers";


function* watchAddProductAsync() {
    yield takeEvery(types.ADD_PRODUCT_TO_CART_ASYNC, add);
}

function* watchGetTotalAsync() {
    yield takeEvery(types.GET_TOTAL_ASYNC, getTotal);
}

export function* watchShoppingCart(): any {
    yield all([call(watchAddProductAsync), call(watchGetTotalAsync)]);
}
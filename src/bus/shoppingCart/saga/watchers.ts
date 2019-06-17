// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { add, empty, getTotal, remove, update } from "./workers";


function* watchAddProductAsync() {
    yield takeEvery(types.ADD_PRODUCT_TO_CART_ASYNC, add);
}

function* watchGetTotalAsync() {
    yield takeEvery(types.GET_TOTAL_ASYNC, getTotal);
}

function* watchRemoveAsync() {
    yield takeEvery(types.REMOVE_iTEM_ASYNC, remove);
}

function* watchUpdateAsync() {
    yield takeEvery(types.UPDATE_iTEM_ASYNC, update);
}

function* watchEmptyAsync() {
    yield takeEvery(types.EMPTY_CART_ASYNC, empty);
}

export function* watchShoppingCart(): any {
    yield all([call(watchAddProductAsync), call(watchGetTotalAsync), call(watchRemoveAsync), call(watchUpdateAsync),
    call(watchEmptyAsync)]);
}
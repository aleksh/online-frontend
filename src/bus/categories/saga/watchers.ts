// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { categories, changeCategory } from "./workers";


function* watchCategoriesAsync() {
    yield takeEvery(types.FETCH_CATEGORIES_ASYNC, categories);
}

function* watchChangeCategory() {
    yield takeEvery(types.CHANGE_CATEGORY, changeCategory);
}

export function* watchCategories(): any {
    yield all([call(watchCategoriesAsync), call(watchChangeCategory)]);
}
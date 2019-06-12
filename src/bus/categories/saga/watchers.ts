// Core
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { types } from "../types";
// Workers
import { categories, category } from "./workers";


function* watchCategoriesAsync() {
    yield takeEvery(types.FETCH_CATEGORIES_ASYNC, categories);
}

function* watchCategoryAsync() {
    yield takeEvery(types.FETCH_CATEGORY_ASYNC, category);
}

export function* watchCategories(): any {
    yield all([call(watchCategoriesAsync), call(watchCategoryAsync)]);
}
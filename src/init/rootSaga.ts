import { all, call } from "redux-saga/effects";
import { watchUser } from "../bus/user/saga/watchers";
import { watchCategories } from "../bus/categories/saga/watchers";


export function* rootSaga() {
    yield all([call(watchUser), call(watchCategories)]);
}

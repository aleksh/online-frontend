import { all, call } from "redux-saga/effects";
import { watchCategories } from "../bus/categories/saga/watchers";
import { watchDepartments } from "../bus/departments/saga/watchers";
import { watchProducts } from "../bus/products/saga/watchers";
import { watchShipping } from "../bus/shipping/saga/watchers";
import { watchShoppingCart } from "../bus/shoppingCart/saga/watchers";
import { watchUser } from "../bus/user/saga/watchers";


export function* rootSaga() {
    yield all([call(watchUser), call(watchCategories), call(watchDepartments), call(watchProducts),
    call(watchShoppingCart), call(watchShipping)]);
}


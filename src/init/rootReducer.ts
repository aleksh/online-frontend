import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { categoriesReducer as categories } from "../bus/categories/reducer";
import { departmentsReducer as departments } from "../bus/departments/reducer";
import { modalReducer as modal } from "../bus/modal/reducer";
import { productsReducer as products } from "../bus/products/reducer";
import { userReducer as user } from "../bus/user/reducer";

export const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    modal,
    user,
    categories,
    departments,
    products
})

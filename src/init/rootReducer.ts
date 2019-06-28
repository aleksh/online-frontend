import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { categoriesReducer as categories } from "../bus/categories/reducer";
import { departmentsReducer as departments } from "../bus/departments/reducer";
import { modalReducer as modal } from "../bus/modal/reducer";
import { productsReducer as products } from "../bus/products/reducer";
import { shippingReducer as shipping } from "../bus/shipping/reducer";
import { shoppingCartReducer as shoppingCart } from "../bus/shoppingCart/reducer";
import { userReducer as user } from "../bus/user/reducer";

export const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    modal,
    user,
    categories,
    departments,
    products,
    shoppingCart,
    shipping,
})

import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { categoriesReducer as categories } from "../bus/categories/reducer";
import { modalReducer as modal } from "../bus/modal/reducer";
import { userReducer as user } from "../bus/user/reducer";

export const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    modal,
    user,
    categories
})

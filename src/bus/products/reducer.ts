// Types
import { Map } from "immutable";
import { types } from "./types";

const initialState = Map({
    products: [],
    product: null,
    productAttributes: null,
    count: 0,
    page: 1,
    search: "",
});

export const productsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_PRODUCTS:            
            return state.merge({
                products: action.payload.rows,
                count: action.payload.count,
            });

        case types.SET_PRODUCT:
            return state.set("product", action.payload);

        case types.SET_PRODUCT_ATTRIBUTES:
            return state.set("productAttributes", action.payload);

        case types.SET_SEARCH:
            return state.set("search", action.payload);

        case types.UPDATE_PAGE_COUNT:
            return state.set("page", action.payload);

        case types.CLEAN_PRODUCT:
            return state.merge({
                product: null,
                productAttributes: null,
            });
        case types.CLEAN_PRODUCTS:
            return state.merge({
                products: []
            });

        default:
            return state;
    }
};

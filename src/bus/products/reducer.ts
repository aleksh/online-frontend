// Types
import { Map } from "immutable";
import { types } from "./types";

const initialState = Map({
    products: [],
    product: null,
    count: 0,
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

        default:
            return state;
    }
};

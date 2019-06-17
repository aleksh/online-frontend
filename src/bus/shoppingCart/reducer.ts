// Types
import { Map } from "immutable";
import { types } from "./types";

const initialState = Map({
    cart_id: null,
    totalAmount: null,
    count: null,
    items: [],
});

export const shoppingCartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_CART_ID:
            return state.set("cart_id", action.payload);
        case types.SET_CART_ITEMS:            
            return state.merge({
                items: action.payload.items,
                count: action.payload.count,
            })
        case types.SET_TOTAL:
            return state.set("totalAmount", action.payload);
        default:
            return state;
    }
};

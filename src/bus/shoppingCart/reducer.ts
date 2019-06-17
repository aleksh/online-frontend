// Types
import { Map } from "immutable";
import Utils from "../../utils/Utils";
import VOCartItem from "../../VO/VOCartItem";
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
            });

        case types.REMOVE_ITEM:
            let items = state.get("items") || [];
            items = items.filter((item: VOCartItem) => item.item_id !== action.payload);
            const count = Utils.GetProductsCount(items);

            return state.merge({
                items,
                count,
            })
        case types.SET_TOTAL:
            return state.set("totalAmount", action.payload);

        case types.EMPTY_CART:
            return state.merge({
                items: [],
                count: 0,
                totalAmount: 0,
            });
        default:
            return state;
    }
};

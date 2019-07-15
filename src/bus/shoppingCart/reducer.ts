// Types
import { Map } from "immutable";
import Utils from "../../utils/Utils";
import VOCartItem from "../../VO/VOCartItem";
import { types } from "./types";

const initialState = Map({
    cart_id: null,
    totalAmount: null,
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

            return state.merge({
                items,
                count:Utils.GetProductsCount(items),
                totalAmount: Utils.GetTotalPrice(items),
            })

        case types.UPDATE_ITEM:
            const itemsUpdate = state.get("items") || [];


            const upItems: any = itemsUpdate.map((item: VOCartItem) => {
                if (item.item_id === action.payload.item_id) {
                    item.quantity = action.payload.quantity;
                    item.subtotal = Utils.GetSubTotalPrice(item);
                }
                return item;
            }
            );

            return state.merge({
                items: upItems,
                count: Utils.GetProductsCount(upItems),
                totalAmount: Utils.GetTotalPrice(upItems),
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

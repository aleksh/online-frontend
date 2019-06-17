// Types
import { types } from "./types";

export const shoppingCartActions = {

    // Sync
    setCartId: (id: any) => {
        return {
            type: types.SET_CART_ID,
            payload: id
        };
    },

    setTotal: (total: any) => {
        return {
            type: types.SET_TOTAL,
            payload: total
        };
    },

    setItems: (items: any) => {
        return {
            type: types.SET_CART_ITEMS,
            payload: items
        };
    },


    // Async
    addProductAsync: (data: any) => {
        return {
            type: types.ADD_PRODUCT_TO_CART_ASYNC,
            payload: data
        };
    },

    getTotalAsync: (data: any) => {
        return {
            type: types.GET_TOTAL_ASYNC,
            payload: data
        };
    },

}
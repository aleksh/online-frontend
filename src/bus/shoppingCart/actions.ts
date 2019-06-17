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

    removeItem: (id: any) => {
        return {
            type: types.REMOVE_ITEM,
            payload: id
        };
    },

    updateItem: (item: any) => {
        return {
            type: types.UPDATE_ITEM,
            payload: item
        };
    },

    emptyCart: () => {
        return {
            type: types.EMPTY_CART,
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

    removeItemAsync: (item_id: any) => {
        return {
            type: types.REMOVE_iTEM_ASYNC,
            payload: item_id
        };
    },

    updateItemAsync: (data: any) => {
        return {
            type: types.UPDATE_iTEM_ASYNC,
            payload: data
        };
    },

    emptyCartAsync: () => {
        return {
            type: types.EMPTY_CART_ASYNC,
        }
    }


}
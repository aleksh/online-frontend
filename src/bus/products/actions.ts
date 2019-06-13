// Types
import { types } from "./types";

export const productsActions = {

    // Sync
    setProducts: (items: any) => {
        return {
            type: types.SET_PRODUCTS,
            payload: items
        };
    },

    setProduct: (item: any) => {
        return {
            type: types.SET_PRODUCT,
            payload: item
        };
    },

    // Async
    productsAsync: () => {
        return {
            type: types.FETCH_PRODUCTS_ASYNC,
        };
    },

    productAsync: (id: number) => {
        return {
            type: types.FETCH_PRODUCT_ASYNC,
            payload: id,
        };
    },

}
// Types
import { types } from "./types";

export const productsActions = {

    // Sync
    setProducts: (data: any) => {
        return {
            type: types.SET_PRODUCTS,
            payload: data
        };
    },

    setProduct: (item: any) => {
        return {
            type: types.SET_PRODUCT,
            payload: item
        };
    },

    setSearch: (search: string = "") => {
        return {
            type: types.SET_SEARCH,
            payload: search
        };
    },

    updatePageCount: (item: any) => {
        return {
            type: types.UPDATE_PAGE_COUNT,
            payload: item
        };
    },

    cleanProduct: () => {
        return {
            type: types.CLEAN_PRODUCT,
        };
    },

    // Async
    productsAsync: (data: any) => {
        return {
            type: types.FETCH_PRODUCTS_ASYNC,
            payload: data,
        };
    },

    productAsync: (id: number) => {
        return {
            type: types.FETCH_PRODUCT_ASYNC,
            payload: id,
        };
    },

    searchAsync: (search: string) => {
        return {
            type: types.SEARCH_ASYNC,
            payload: search,
        };
    },

}
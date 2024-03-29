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

    setProductAttributes: (item: any) => {
        return {
            type: types.SET_PRODUCT_ATTRIBUTES,
            payload: item
        };
    },

    setProductReviews: (data: any) => {
        return {
            type: types.SET_PRODUCT_REVIEWS,
            payload: data
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

    cleanProducts: () => {
        return {
            type: types.CLEAN_PRODUCTS,
        };
    },

    cleanSelectedItems: () => {
        return {
            type: types.CLEAN_SELECTED_ITEMS,
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
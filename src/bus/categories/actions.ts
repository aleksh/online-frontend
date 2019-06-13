// Types
import { types } from "./types";

export const categoriesActions = {

    // Sync
    setCategories: (categories: any) => {
        return {
            type: types.SET_CATEGORIES,
            payload: categories
        };
    },

    setCategory: (category: any) => {
        return {
            type: types.SET_CATEGORY,
            payload: category
        };
    },

    setSelectedCategory: (item: any) => {
        return {
            type: types.SET_SELECTED_CATEGORY,
            payload: item
        };
    },


    // Async
    categoriesAsync: () => {
        return {
            type: types.FETCH_CATEGORIES_ASYNC,
        };
    },

    categoryAsync: (category_id: number) => {
        return {
            type: types.FETCH_CATEGORIES_ASYNC,
            payload: category_id,
        };
    },

}
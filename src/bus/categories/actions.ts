// Types
import VOCategory from "../../VO/VOCategory";
import { types } from "./types";

export const categoriesActions = {

    // Sync
    setCategories: (categories: any) => {
        return {
            type: types.SET_CATEGORIES,
            payload: categories
        };
    },

    setSelectedCategory: (item: VOCategory) => {
        return {
            type: types.SET_SELECTED_CATEGORY,
            payload: item
        };
    },

    cleanSelectedCategory: () => {
        return {
            type: types.CLEAN_SELECTED_CATEGORY
        };
    },

    filterCategoryByDepartment: (departmentId: any) => {
        return {
            type: types.FILTER_CATEGORIES_BY_DEPARTMENT,
            payload: departmentId
        };
    },

    changeCategory: (item: VOCategory) => {
        return {
            type: types.CHANGE_CATEGORY,
            payload: item,
        };
    },


    // Async
    categoriesAsync: () => {
        return {
            type: types.FETCH_CATEGORIES_ASYNC,
        };
    },

}
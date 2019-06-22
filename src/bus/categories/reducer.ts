// Types
import { Map } from "immutable";
import VOCategory from "../../VO/VOCategory";
import { types } from "./types";

const initialState = Map({
    allCategories: [],
    filteredCategories: [],
    selectedCategory: null,
});

export const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_CATEGORIES:

            return state.merge({
                allCategories: action.payload,
                filteredCategories: action.payload,
            });

        case types.FILTER_CATEGORIES_BY_DEPARTMENT:
            const allCategories = state.get("allCategories") || [];
            const filteredCategories = allCategories.filter((item: VOCategory) => item.department_id === action.payload);

            return state.set("filteredCategories", filteredCategories);
        case types.SET_SELECTED_CATEGORY:
            return state.set("selectedCategory", action.payload);

        case types.CLEAN_SELECTED_CATEGORY:
            return state.set("selectedCategory", null);


        default:
            return state;
    }
};

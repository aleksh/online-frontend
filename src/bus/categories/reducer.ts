// Types
import { Map } from "immutable";
import { types } from "./types";

const initialState = Map({
    categories: [],
    selectedCategory: null,
});

export const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return state.set("categories", action.payload);

        case types.SET_SELECTED_CATEGORY:
            return state.set("selectedCategory", action.payload);

        case types.CLEAR_SELECTED_CATEGORY:
            return state.set("selectedCategory", null);

            
        default:
            return state;
    }
};

// Types
import { Map } from "immutable";
import { types } from "./types";

const initialState = Map({
    categories: [],
    selectedCategoryId: null,
});

export const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return state.set("categories", action.payload);

        case types.SET_SELECTED_CATEGORY_ID:
            return state.set("selectedCategoryId", action.payload);

        default:
            return state;
    }
};

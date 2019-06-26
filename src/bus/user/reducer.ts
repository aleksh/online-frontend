// Types
import { Map } from "immutable";
import { types } from "./types";

const initialState = Map({
    isLoggedIn: false,
    user: null,
    isUpdating: false,
    isUpdated: false,
    isUpdateError: false,
});

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_USER:
            return state.merge({
                user: action.payload,
                isLoggedIn: true
            });

        case types.LOGOUT:
            return state.merge({
                user: null,
                isLoggedIn: false
            });

        default:
            return state;
    }
};

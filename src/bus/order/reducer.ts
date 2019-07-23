import { Map } from "immutable";
import { types } from './types';

const initialState = Map({
    orders: null,
});

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORDERS:
            return state.set("orders", action.payload);
        default:
            return state;
    }
};

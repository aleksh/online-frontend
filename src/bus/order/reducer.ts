import { Map } from "immutable";
import { types } from './types';

const initialState = Map({
    orders: null,
    orderForPay: null,
});

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORDERS:
            return state.set("orders", action.payload);
        case types.SET_ORDER_FOR_PAY:
            return state.set("orderForPay", action.payload);
        default:
            return state;
    }
};

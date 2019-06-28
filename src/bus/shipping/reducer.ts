import { Map } from "immutable";
import { types } from './types';

const initialState = Map({
    regions: null,
});

export const shippingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_REGIONS:
            return state.set("regions", action.payload);

        default:
            return state;
    }
};

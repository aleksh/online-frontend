import { Map } from "immutable";
import { types } from './types';

const initialState = Map({
    regions: null,
});

export const shippingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_REGIONS:

            const regions = action.payload.map(item => {
                return { ...item, label: item.shipping_region, value: item.shipping_region_id }
            })

            return state.set("regions", regions);

        default:
            return state;
    }
};

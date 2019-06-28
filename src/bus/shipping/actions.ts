// Types
import { types } from './types';

export const shippingActions = {
    // Sync
    setRegions: (regions: any) => {
        return {
            type: types.SET_REGIONS,
            payload: regions,
        }
    },


    // Async 
    regionsAsync: () => {
        return {
            type: types.FETCH_REGIONS_ASYNC,
        }
    }
}
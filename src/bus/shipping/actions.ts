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

    setTaxes: (taxes: any) => {
        return {
            type: types.SET_TAXES,
            payload: taxes,
        }
    },


    // Async 
    regionsAsync: () => {
        return {
            type: types.FETCH_REGIONS_ASYNC,
        }
    },

    taxesAsync: () => {
        return {
            type: types.FETCH_TAXES_ASYNC,
        }
    }
}
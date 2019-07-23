// Types
import { types } from './types';

export const orderActions = {
    // Sync
    setOrders: (orders: any) => {
        return {
            type: types.SET_ORDERS,
            payload: orders,
        }
    },


    // Async 
    createOrderAsync: (item: Object) => {
        return {
            type: types.CREATE_ORDER_ASYNC,
            payload: item
        }
    },

    fetchOrdersAsync: () => {
        return {
            type: types.FETCH_ORDERS_ASYNC
        }
    },
}
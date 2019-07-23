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

    setOrderForPay: (order: any) => {
        return {
            type: types.SET_ORDER_FOR_PAY,
            payload: order,
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
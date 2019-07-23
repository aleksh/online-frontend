import axios from "axios";

export const order = {

    createOrder(data: any, token: string) {
        return axios.post(`/orders`, data, {
            headers: { 'user-key': token }
        });
    },  

    orders(token: string) {
        return axios.get(`/orders/inCustomer`, {
            headers: { 'user-key': token }
        });
    },  
}
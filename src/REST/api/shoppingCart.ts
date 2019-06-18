import axios from "axios";

export const shoppingCart = {

    generateUniqueId() {
        return axios.get(`/shoppingcart/generateUniqueId`);
    },
   
    add(data:any) {
        return axios.post(`/shoppingcart/add`, data);
    },

    get(cart_id:any) {
        return axios.get(`/shoppingcart/${cart_id}`);
    },

    update(data:any) {
        return axios.put(`/shoppingcart/update/${data.item_id}`, {quantity: data.quantity});
    },

    empty(cart_id:any) {
        return axios.delete(`/shoppingcart/empty/${cart_id}`);
    },

    totalAmount(cart_id:any) {
        return axios.get(`/shoppingcart/totalAmount/${cart_id}`);
    },

    removeProduct(item_id:any) {
        return axios.delete(`/shoppingcart/removeProduct/${item_id}`);
    },
   
}

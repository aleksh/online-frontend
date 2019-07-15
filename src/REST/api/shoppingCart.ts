import axios from "axios";
import { CANCEL_REQUEST } from "../config";

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
        if (CancelCard.cancelUpdate) {
            CancelCard.cancelUpdate.cancel(CANCEL_REQUEST);
        }

        CancelCard.cancelUpdate = axios.CancelToken.source();

        return axios.put(`/shoppingcart/update/${data.item_id}`, {quantity: data.quantity}, {
            cancelToken: CancelCard.cancelUpdate.token
        });
    },

    empty(cart_id:any) {
        return axios.delete(`/shoppingcart/empty/${cart_id}`);
    },

    cancelTotalAmount() {
        if (CancelCard.cancelTotal) {
            CancelCard.cancelTotal.cancel(CANCEL_REQUEST);
        }
    }, 

    totalAmount(cart_id:any) {
        if (CancelCard.cancelTotal) {
            CancelCard.cancelTotal.cancel(CANCEL_REQUEST);
        }

        CancelCard.cancelTotal = axios.CancelToken.source();

        return axios.get(`/shoppingcart/totalAmount/${cart_id}`, {
            cancelToken: CancelCard.cancelTotal.token
        });
    },

    removeProduct(item_id:any) {
        return axios.delete(`/shoppingcart/removeProduct/${item_id}`);
    },
   
}

class CancelCard {
    static cancelUpdate: any = null;
    static cancelTotal: any = null;    
}

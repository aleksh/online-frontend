import axios from "axios";

export const stripe = {

    charge(data: any, token: string) {
        return axios.post(`/stripe/charge`, data, {
            headers: { 'user-key': token }
        });
    },

}
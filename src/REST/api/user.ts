import axios from "axios";
import VOLoginRequest from "../../components/Modals/ModalLogin/VOLoginRequest";
import VORegisterRequest from "../../components/Modals/ModalRegister/VORegisterRequest";

export const user = {
    login(data: VOLoginRequest) {
        return axios.post(`/customers/login`, data);
    },

    facebook(access_token: string) {
        return axios.post(`/customers/facebook`, { access_token: access_token });
    },

    register(data: VORegisterRequest) {
        return axios.post(`/customers`, data);
    },

    updateProfile(data: any, token: string) {
        return axios.put(`/customer`, data, {
            headers: { 'user-key': token }
        });
    },

    updateAddress(data: any, token: string) {
        return axios.put(`/customers/address`, data, {
            headers: { 'user-key': token }
        });
    },

    authenticate(token: string) {
        return axios.get('/customer', {
            headers: { 'user-key': token }
        });
    },
}
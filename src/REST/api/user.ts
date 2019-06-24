import axios from "axios";
import VOLoginRequest from "../../components/Modals/ModalLogin/VOLoginRequest";
import VORegisterRequest from "../../components/Modals/ModalRegister/VORegisterRequest";

export const user = {
    login(data: VOLoginRequest) {
        return axios.post(`/customers/login`, data);
    },

    facebook(access_token: string) {
        console.log("facebook LLogin")
        console.log(access_token)
        return axios.post(`/customers/facebook`, { access_token: access_token});
    },

    register(data: VORegisterRequest) {
        return axios.post(`/customers`, data);
    },

    authenticate(token: string) {
        return axios.get('/customer', {
            headers: { 'user-key': token }
        });
    },
}
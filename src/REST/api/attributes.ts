import axios from "axios";

export const attributes = {
    fetch() {
        return axios.get(`/attributes`);
    },
    fetchById(attribute_id: number) {
        return axios.get(`/attributes/${attribute_id}`);
    },
    fetchValues(attribute_id: number) {
        return axios.get(`/attributes/values/${attribute_id}`);
    },
    fetchInProduct(product_id: number) {
        return axios.get(`/attributes/inProduct/${product_id}`);
    },
}
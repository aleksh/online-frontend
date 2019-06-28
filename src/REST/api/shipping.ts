import axios from "axios";


export const shipping = {    
    regions() {
        return axios.get(`/shipping/regions`);
    },
    regionsById(shipping_region_id: number) {
        return axios.get(`/shipping/regions/${shipping_region_id}`);
    },
}
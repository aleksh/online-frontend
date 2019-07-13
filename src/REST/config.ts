import axios from "axios";

// Config
export const ROOT_URL = 'https://backendapi.turing.com';
export const PRODUCT_IMAGE_URL = 'https://backendapi.turing.com/images/products/';


export const CANCEL_REQUEST: string = "CANCEL_REQUEST";

axios.defaults.baseURL = ROOT_URL;
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Do something with response error

    let { response } = error;
    if (response && response.status === 401) {
        // Do logout;
        // Redirect to login;        
        return Promise.resolve(error.response);
    }
    else if (error.response) {
        // Do something.        
        return Promise.resolve(error.response);
    }

    return Promise.reject(error);
});

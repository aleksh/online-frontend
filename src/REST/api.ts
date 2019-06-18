import { attributes } from "./api/attributes";
import { categories } from "./api/categories";
import { departments } from "./api/departments";
import { products } from "./api/products";
import { shoppingCart } from "./api/shoppingCart";
import { user } from "./api/user";


export const api = {
    setToken(token: string) {
        localStorage.setItem('turFrontentToken', token);
    },

    geToken(): string {
        return localStorage.getItem('turFrontentToken') || '';
    },

    removeToken() {
        localStorage.removeItem('turFrontentToken');
    },

    user,
    departments,
    categories,
    attributes,
    products,
    shoppingCart,
}

    /*
    
    let call;
    const once = (config = {}) => {
        if (call) {
          call.cancel("Only one request allowed at a time.");
        }
        call = axios.CancelToken.source();
    
        config.cancelToken = call.token
        return axios(config);
      }
    use it:
    
    var config = {
            method: "get",
            url: "/your/url/endpoint",
            timeout: 60000
          }
    
    once(config)
            .then(response => {
              // success callback
            })
            .catch(error => {
              // error callback
            })
            .then(() => {
              // do no matter error or success
            });
    
    
    */



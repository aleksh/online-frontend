import axios from "axios";
import { ROOT_URL } from './config';

export const api = {
    /*get token () {
        return localStorage.getItem('token');
    },*/

    departments: {
        fetch() {
            return axios.get(`${ROOT_URL}/departments`);
        },
        fetchById(department_id: number) {
            return axios.get(`${ROOT_URL}/departments/${department_id}`);
        },
    },

    categories: {
        fetch() {
            return axios.get(`${ROOT_URL}/categories`);
        },
        fetchById(category_id: number) {
            return axios.get(`${ROOT_URL}/categories/${category_id}`);
        },
        fcategoriesInProduct(product_id: number) {
            return axios.get(`${ROOT_URL}/categories/inProduct/${product_id}`);
        },
        categoriesInDepartment(department_id: number) {
            return axios.get(`${ROOT_URL}/categories/inDepartment/${department_id}`);
        },
    },

    attributes: {
        fetch() {
            return axios.get(`${ROOT_URL}/attributes`);
        },
        fetchById(attribute_id: number) {
            return axios.get(`${ROOT_URL}/attributes/${attribute_id}`);
        },
        fetchValues(attribute_id: number) {
            return axios.get(`${ROOT_URL}/attributes/values/${attribute_id}`);
        },
        fetchInProduct(product_id: number) {
            return axios.get(`${ROOT_URL}/attributes/inProduct/${product_id}`);
        },
    },


    products: {
        
        fetch(data:any) {
            return axios.get(`${ROOT_URL}/products?page=${data.page}&limit=${data.limit}`);
        },
        search(data:any) {
            return axios.get(`${ROOT_URL}/products/search?query_string=${data.search}&page=${data.page}&limit=${data.limit}`);
        },
        fetchById(product_id: number) {
            return axios.get(`${ROOT_URL}/products/${product_id}`);
        },
        productsInCategory(data: any) {
            console.log(data);
            return axios.get(`${ROOT_URL}/products/inCategory/${data.category_id}/?page=${data.page}&limit=${data.limit}`);
        },
        productsInDepartment(data: any) {
            console.log(data);
            return axios.get(`${ROOT_URL}/products/inDepartment/${data.department_id}/?page=${data.page}&limit=${data.limit}`);
        },
        productDetails(product_id: number) {
            return axios.get(`${ROOT_URL}/products/${product_id}/details`);
        },
        productLocations(product_id: number) {
            return axios.get(`${ROOT_URL}/products/${product_id}/locations`);
        },
        productReviews(product_id: number) {
            return axios.get(`${ROOT_URL}/products/${product_id}/reviews`);
        },
        //need post review api add
    },





























    auth: {
        /*signup (userInfo) {
            return fetch(`${MAIN_URL}/user/`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        },
        login (credentials) {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
        },
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: this.token }),
            });
        },
        logout () {
            return fetch(`${MAIN_URL}/user/logout`, {
                method:  'GET',
                headers: {
                    'Authorization': this.token,
                },
            });
        },*/
    },
    /*
        posts: {
            fetch () {
                return fetch(`${MAIN_URL}/feed`, {
                    method:  'GET',
                    headers: {
                        'Authorization': this.token,
                    },
                });
            },
            create (comment) {
                return fetch(`${MAIN_URL}/feed`, {
                    method:  'POST',
                    headers: {
                        'Authorization': this.token,
                        'Content-Type':  'application/json',
                    },
                    body: JSON.stringify({ comment }),
                });
            },
            remove (postId) {
                return fetch(`${MAIN_URL}/feed/${postId}`, {
                    method:  'DELETE',
                    headers: {
                        'Authorization': this.token,
                    },
                });
            },
            like (postId) {
                return fetch(`${MAIN_URL}/feed/like/${postId}`, {
                    method:  'PUT',
                    headers: {
                        'Authorization': this.token,
                    },
                });
            },
        },*/
    /* profile: {
         updateProfile (profileInfo) {
             return fetch(`${MAIN_URL}/user`, {
                 method:  'PUT',
                 headers: {
                     'Authorization': this.token,
                     'Content-Type':  'application/json',
                 },
                 body: JSON.stringify(profileInfo),
             });
         },
         updateAvatar (avatarFormData) {
             return fetch(`${MAIN_URL}/image`, {
                 method:  'POST',
                 headers: {
                     'Authorization': this.token,
                 },
                 body: avatarFormData,
             });
         },
     },*/
    /* users: {
         fetch () {
             return fetch(`${MAIN_URL}/user/all`, {
                 method:  'GET',
                 headers: {
                     'Authorization': this.token,
                 },
             });
         },
     },*/
};

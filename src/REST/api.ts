import axios from "axios";
import VOLoginRequest from "../components/Modals/ModalLogin/VOLoginRequest";
import VORegisterRequest from "../components/Modals/ModalRegister/VORegisterRequest";


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

    user: {
        login(data: VOLoginRequest) {
            return axios.post(`/customers/login`, data);
        },

        facebook(access_token: string) {
            return axios.post(`/customers/facebook`, { access_token });
        },

        register(data: VORegisterRequest) {
            return axios.post(`/customers`, data);
        },

        authenticate(token: string) {
            return axios.get('/customer', {
                headers: { 'user-key': token }
            });
        },
    },

    departments: {
        fetch() {
            return axios.get(`/departments`);
        },
        fetchById(department_id: number) {
            return axios.get(`/departments/${department_id}`);
        },
    },

    categories: {
        fetch() {
            return axios.get(`/categories`);
        },
        fetchById(category_id: number) {
            return axios.get(`/categories/${category_id}`);
        },
        fcategoriesInProduct(product_id: number) {
            return axios.get(`/categories/inProduct/${product_id}`);
        },
        categoriesInDepartment(department_id: number) {
            return axios.get(`/categories/inDepartment/${department_id}`);
        },
    },

    attributes: {
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
    },


    products: {

        fetch(data: any) {
            return axios.get(`/products?page=${data.page}&limit=${data.limit}`);
        },
        search(data: any) {
            return axios.get(`/products/search?query_string=${data.search}&page=${data.page}&limit=${data.limit}`);
        },
        fetchById(product_id: number) {
            return axios.get(`/products/${product_id}`);
        },
        productsInCategory(data: any) {
            console.log(data);
            return axios.get(`/products/inCategory/${data.category_id}/?page=${data.page}&limit=${data.limit}`);
        },
        productsInDepartment(data: any) {
            console.log(data);
            return axios.get(`/products/inDepartment/${data.department_id}/?page=${data.page}&limit=${data.limit}`);
        },
        productDetails(product_id: number) {
            return axios.get(`/products/${product_id}/details`);
        },
        productLocations(product_id: number) {
            return axios.get(`/products/${product_id}/locations`);
        },
        productReviews(product_id: number) {
            return axios.get(`/products/${product_id}/reviews`);
        },
        //need post review api add
    },

    shoppingCart: {

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
            return axios.get(`/shoppingcart/removeProduct/${item_id}`);
        },
       
    },









};

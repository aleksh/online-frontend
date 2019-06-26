import axios from "axios";
import { DESCRIPTION_LENGTH } from "../../utils/Constants";
import { CANCEL_REQUEST } from "../config";


export const products = {

    fetch(data: any) {
        cancelPendingRequests();

        CancelProducts.cancelFetch = axios.CancelToken.source();

        return axios.get(`/products?page=${data.page}&limit=${data.limit}&description_length=${DESCRIPTION_LENGTH}`, {
            cancelToken: CancelProducts.cancelFetch.token
        });
    },
    search(data: any) {
        cancelPendingRequests();

        CancelProducts.cancelSearch = axios.CancelToken.source();

        return axios.get(`/products/search?query_string=${data.search}&page=${data.page}&limit=${data.limit}&description_length=${DESCRIPTION_LENGTH}`, {
            cancelToken: CancelProducts.cancelSearch.token
        });

    },

    productsInCategory(data: any) {
        cancelPendingRequests();

        CancelProducts.cancelProductsInCategory = axios.CancelToken.source();

        return axios.get(`/products/inCategory/${data.category_id}/?page=${data.page}&limit=${data.limit}&description_length=${DESCRIPTION_LENGTH}`, {
            cancelToken: CancelProducts.cancelProductsInCategory.token
        });
    },

    productsInDepartment(data: any) {
        cancelPendingRequests();

        CancelProducts.cancelProductsInDepartment = axios.CancelToken.source();

        return axios.get(`/products/inDepartment/${data.department_id}/?page=${data.page}&limit=${data.limit}&description_length=${DESCRIPTION_LENGTH}`, {
            cancelToken: CancelProducts.cancelProductsInDepartment.token
        });
    },

    productDetails(product_id: number) {
        return axios.get(`/products/${product_id}/details`);
    },

    productLocations(product_id: number) {
        return axios.get(`/products/${product_id}/locations`);
    },

    productReviews(product_id: number) {
        cancelPendingRequests();

        CancelProducts.cancelProductsReviews = axios.CancelToken.source();

        return axios.get(`/products/${product_id}/reviews`, {
            cancelToken: CancelProducts.cancelProductsReviews.token
        });
    },

    fetchById(product_id: number) {
        return axios.get(`/products/${product_id}`);
    },
    //need post review api add
}


class CancelProducts {
    static cancelFetch: any = null;
    static cancelSearch: any = null;
    static cancelFetchById: any = null;
    static cancelProductsInCategory: any = null;
    static cancelProductsInDepartment: any = null;
    static cancelProductsReviews: any = null;
}


const cancelPendingRequests = () => {

    if (CancelProducts.cancelFetch) {
        CancelProducts.cancelFetch.cancel(CANCEL_REQUEST);
    }

    if (CancelProducts.cancelSearch) {
        CancelProducts.cancelSearch.cancel(CANCEL_REQUEST);
    }

    if (CancelProducts.cancelProductsInCategory) {
        CancelProducts.cancelProductsInCategory.cancel(CANCEL_REQUEST);
    }

    if (CancelProducts.cancelProductsInDepartment) {
        CancelProducts.cancelProductsInDepartment.cancel(CANCEL_REQUEST);
    }

    if (CancelProducts.cancelProductsReviews) {
        CancelProducts.cancelProductsReviews.cancel(CANCEL_REQUEST);
    }
}
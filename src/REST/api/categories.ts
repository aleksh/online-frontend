import axios from "axios";
import { CANCEL_REQUEST } from "../config";


export const categories = {
    fetch() {
        cancelPendingRequests();

        CancelСategories.cancelFetch = axios.CancelToken.source();

        return axios.get(`/categories`, {
            cancelToken: CancelСategories.cancelFetch.token
        });
    },
    categoriesInDepartment(department_id: number) {
        cancelPendingRequests();

        CancelСategories.cancelCatInDepartment = axios.CancelToken.source();

        return axios.get(`/categories/inDepartment/${department_id}`, {
            cancelToken: CancelСategories.cancelCatInDepartment.token
        });
    },
}

class CancelСategories {
    static cancelFetch: any = null;
    static cancelCatInDepartment: any = null;
}

const cancelPendingRequests = () => {

    if (CancelСategories.cancelFetch) {
        CancelСategories.cancelFetch.cancel(CANCEL_REQUEST);
    }

    if (CancelСategories.cancelCatInDepartment) {
        CancelСategories.cancelCatInDepartment.cancel(CANCEL_REQUEST);
    }
}
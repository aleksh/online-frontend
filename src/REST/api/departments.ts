import axios from "axios";


export const departments = {    
    fetch() {
        return axios.get(`/departments`);
    },
    fetchById(department_id: number) {
        return axios.get(`/departments/${department_id}`);
    },
}
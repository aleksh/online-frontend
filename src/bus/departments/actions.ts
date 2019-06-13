// Types
import { types } from "./types";

export const departmentsActions = {

    // Sync
    setDepartments: (categories: any) => {
        return {
            type: types.SET_DEPARTMENTS,
            payload: categories
        };
    },

    setSelectedDepartment: (item: any) => {
        return {
            type: types.SET_SELECTED_DEPARTMENT,
            payload: item
        };
    },


    // Async
    departmentsAsync: () => {
        return {
            type: types.FETCH_DEPARTMENTS_ASYNC,
        };
    },

    departmentAsync: (category_id: number) => {
        return {
            type: types.FETCH_DEPARTMENT_ASYNC,
            payload: category_id,
        };
    },

}
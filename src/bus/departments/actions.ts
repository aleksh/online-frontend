// Types
import VODepartment from "../../VO/VODepartment";
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

    changeDepartment: (item: VODepartment) => {
        return {
            type: types.CHANGE_DEPARTMENT,
            payload: item,
        };
    },

    // Async
    departmentsAsync: () => {
        return {
            type: types.FETCH_DEPARTMENTS_ASYNC,
        };
    },

}
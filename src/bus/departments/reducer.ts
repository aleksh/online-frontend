// Types
import { Map } from "immutable";
import { types } from "./types";

const initialState = Map({
    departments: [],
    selectedDepartmentId: null,
});

export const departmentsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_DEPARTMENTS:
            return state.set("departments", action.payload);

        case types.SET_SELECTED_DEPARTMENT_ID:
            return state.set("selectedDepartmentId", action.payload);

        default:
            return state;
    }
};

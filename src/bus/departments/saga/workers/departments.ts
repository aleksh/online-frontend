
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { departmentsActions } from "../../actions";


export function* departments() {
    try {

        const { data: departments, message, status } = yield call(api.departments.fetch);

        console.log("in Saga");
        console.log(departments);
        if (status !== 200) {
            throw new Error(message);
        }

        yield put(departmentsActions.setDepartments(departments));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

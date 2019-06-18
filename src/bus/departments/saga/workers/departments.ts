
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { departmentsActions } from "../../actions";


export function* departments() {
    try {

        const { data: departments, status } = yield call(api.departments.fetch);

        if (status !== 200) {
            throw new Error(departments.error.message);
        }

        yield put(departmentsActions.setDepartments(departments));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

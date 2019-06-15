
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST/api";
import { modalActions } from "../../../modal/actions";


export function* login({ payload }: any) {

    try {
        const { data, status } = yield call(api.user.login, payload);
        console.log("RRRRRRRRRRRRRRRRRR");
        console.log(data);

        if (status !== 200) {
            throw new Error(data.error.message);
        }

        //yield put(productsActions.setProduct(product));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

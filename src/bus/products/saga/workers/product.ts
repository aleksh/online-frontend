
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";


export function* product({ payload: id }: any) {
    try {

        const { data: product, message, status } = yield call(api.products.fetchById, id);
        
        if (status !== 200) {
            throw new Error(message);
        }

        yield put(productsActions.setProduct(product));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

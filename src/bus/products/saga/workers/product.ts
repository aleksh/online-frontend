
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { CANCEL_REQUEST } from "../../../../REST/config";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";
import { productAttributes, productReviews } from "./index";


export function* product({ payload: id }: any) {
    try {

        const { data: product, status } = yield call(api.products.fetchById, id);

        if (status !== 200) {
            throw new Error(product.error.message);
        }

        yield put(productsActions.setProduct(product));
        yield call(productAttributes, id);
        yield call(productReviews, id);

    } catch (error) {
        if (error.message !== CANCEL_REQUEST) {
            yield put(modalActions.showError(error.message));
        }
    }
}

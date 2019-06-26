
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { CANCEL_REQUEST } from "../../../../REST/config";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";


export function* productReviews(id: any) {
    try {

        const { data: reviews, status } = yield call(api.products.productReviews, id);

        if (status !== 200) {
            throw new Error(reviews.error.message);
        }

        yield put(productsActions.setProductReviews(reviews));

    } catch (error) {
        if (error.message !== CANCEL_REQUEST) {
            yield put(modalActions.showError(error.message));
        }
    }
}


import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";


export function* products({ payload }: any) {

    console.log(payload);

    console.log("in Saga products");
    try {

        const { data: products, message, status } = yield call(api.products.fetch, payload);

        console.log("in Saga products");
        console.log(products);
        if (status !== 200) {
            throw new Error(message);
        }

        yield put(productsActions.setProducts(products));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    }
}

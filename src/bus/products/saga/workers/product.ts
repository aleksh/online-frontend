
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";
import {productAttributes} from "./index";


export function* product({ payload: id }: any) {
    try {

        const { data: product, status } = yield call(api.products.fetchById, id);

        if (status !== 200) {
            throw new Error(product.error.message);
        }
        
        yield put(productsActions.setProduct(product));
        yield call(productAttributes, id);

    } catch (error) {
        yield put(modalActions.showError(error.message));
    } finally {
        console.log("SAGA product complete");
    }
}

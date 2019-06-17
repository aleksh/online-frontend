
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST";
import Utils from "../../../../utils/Utils";
import { modalActions } from "../../../modal/actions";
import { productsActions } from "../../actions";


export function* productAttributes(id: any) {
    try {

        const { data: productAttr, status } = yield call(api.attributes.fetchInProduct, id);

        if (status !== 200) {
            throw new Error(productAttr.error.message);
        }

        const groupedAttr = yield call(Utils.GroupAttributesByName, productAttr);
        yield put(productsActions.setProductAttributes(groupedAttr));

    } catch (error) {
        yield put(modalActions.showError(error.message));
    } finally {
        console.log("SAGA Attributes complete");
    }
}

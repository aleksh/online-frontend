
import { call, put } from "redux-saga/effects";
import { api } from "../../../../REST/api";
import Utils from "../../../../utils/Utils";
import { shoppingCartActions } from "../../../shoppingCart/actions";
import { userActions } from "../../actions";


export function* authenticate() {

    try {

        const token = yield call(api.getToken);

        if (token && token.length) {
            const { data, status } = yield call(api.user.authenticate, token);

            if (status !== 200) {
                yield put(userActions.logoutAsync());
            } else {
                yield put(userActions.setUser(data));
            }
        }


        const cardId = yield call(api.getCardId);

        if (cardId && cardId.length) {
            yield put(shoppingCartActions.setCartId(cardId));
            const { data, status } = yield call(api.shoppingCart.get, cardId);

            if (status !== 200) {
                throw new Error(data.error.message);
            }

            const count = yield call(Utils.GetProductsCount, data);

            yield put(shoppingCartActions.setItems({ items: data, count }));
            yield put(shoppingCartActions.getTotalAsync(cardId));
        }

    } catch (error) {
        // we don't need 
        // yield put(modalActions.showError(error.message));
    }
}

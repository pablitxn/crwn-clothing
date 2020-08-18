// Redux Ducks
import * as actions from "state/shop/actions";
import * as types from "state/shop/types";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";
// Firebase
import rsf from "state/firebase";
// Utils
import { formatPath } from "utils";

function* workerProducts({ payload }) {
	try {
		const dbReference = formatPath(payload);
		const { data } = yield call(rsf.database.read, dbReference);
		console.log("products", dbReference, data);
		yield put(actions.productsSuccess(data));
	} catch (error) {
		yield put(actions.productsFailure(error));
	}
}

function* watchProducts() {
	yield takeLatest(types.PRODUCTS_REQUEST, workerProducts);
}

export default [watchProducts];

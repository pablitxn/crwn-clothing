// Redux Ducks
import * as actions from "state/shop/actions";
import * as types from "state/shop/types";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";
// Firebase
import rsf from "state/firebase";
// Utils
import { formatURL } from "utils";

function* workerProducts({ section }) {
	try {
		const dbReference = formatURL(section);
		const { data } = yield call(rsf.database.read, dbReference);
		console.log("products", dbReference, data);
		yield put(actions.sectionsSuccess(data));
	} catch (error) {
		yield put(actions.sectionsFailure(error));
	}
}

function* watchProducts() {
	yield takeLatest(types.PRODUCTS_REQUEST, workerProducts);
}

export default [watchProducts];

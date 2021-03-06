// Redux Ducks
import * as actions from "state/shop/actions";
import * as types from "state/shop/types";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";
// Firebase
import rsf from "state/firebase";

function* workerSections() {
	try {
		const dbReference = "/0";
		const { data } = yield call(rsf.database.read, dbReference);
		yield put(actions.sectionsSuccess(data));
	} catch (error) {
		yield put(actions.sectionsFailure(error));
	}
}

function* watchSections() {
	yield takeLatest(types.SECTIONS_REQUEST, workerSections);
}

export default [watchSections];

// Redux Ducks
import * as actions from "state/shop/actions";
import * as types from "state/shop/types";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";
// Firebase
import rsf from "state/firebase";

function* workerSections() {
	try {
		const sections = yield call(rsf.database.read, "/");
		console.log("saga", sections);
		yield put(actions.sectionsSuccess(sections));
	} catch (error) {
		yield put(actions.sectionsFailure(error));
	}
}

function* watchSections() {
	yield takeLatest(types.SECTIONS_REQUEST, workerSections);
}

export default [watchSections];

// Redux Ducks
import * as actions from "state/session/actions";
import * as types from "state/session/types";
import { clearDucks } from "state/clearStore/actions";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";
// Router
import { push } from "connected-react-router";
// Firebase
import rsf from "state/firebase";

function* workerSignOut() {
	try {
		// Sign in
		yield call(rsf.auth.signOut);
		// Clear data
		yield put(clearDucks());
		yield put(actions.signOutSuccess());
		yield;
		// Redirect to home
		yield put(push("/"));
	} catch (error) {
		// Catching error
		yield put(actions.signOutFailure(error));
	}
}

function* watchSignOut() {
	yield takeLatest(types.SIGNOUT_REQUEST, workerSignOut);
}

export default [watchSignOut];

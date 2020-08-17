// Redux Ducks
import * as actions from "state/session/actions";
import * as types from "state/session/types";
// Redux Saga
import { put, takeLatest, call } from "redux-saga/effects";
// Router
import { push } from "connected-react-router";
// Firebase
import firebase from "firebase";
import rsf from "state/firebase";

const authProvider = new firebase.auth.GoogleAuthProvider();

function* workerSignInGoogle() {
	try {
		// Sign in
		yield call(rsf.auth.signInWithPopup, authProvider);
		// Saving data
		const user = firebase.auth().currentUser;
		yield put(actions.signInGoogleSuccess(user));
		// Redirect to home
		yield put(push("/"));
	} catch (error) {
		// Catching error
		yield put(actions.signInGoogleFailure(error));
	}
}

function* watchSignInGoogle() {
	yield takeLatest(types.SIGNIN_GOOGLE_REQUEST, workerSignInGoogle);
}

export default [watchSignInGoogle];

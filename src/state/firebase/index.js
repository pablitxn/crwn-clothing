import firebase from "firebase/app";
import "firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

import "firebase/auth";

export const myFirebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDlhsdUHra-ZavqHqbY7a8FJ2y8FUD0BCo",
	authDomain: "operating-codex-272519.firebaseapp.com",
	databaseURL: "https://operating-codex-272519.firebaseio.com",
	projectId: "operating-codex-272519",
	storageBucket: "operating-codex-272519.appspot.com",
	messagingSenderId: "868153774957",
	appId: "1:868153774957:web:10c7902f312bcaa9a94064",
	measurementId: "G-WN15215P2Y",
});

const rsf = new ReduxSagaFirebase(myFirebaseApp);

export default rsf;

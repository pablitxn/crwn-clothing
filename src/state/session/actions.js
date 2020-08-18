// Redux Ducks
import sessionDuck from "state/session";
import * as types from "state/session/types";

export const signInRequest = sessionDuck.createAction(types.SIGNIN_REQUEST);
export const signInSuccess = sessionDuck.createAction(types.SIGNIN_SUCCESS);
export const signInFailure = sessionDuck.createAction(types.SIGNIN_FAILURE);

export const signInGoogleRequest = sessionDuck.createAction(types.SIGNIN_GOOGLE_REQUEST);
export const signInGoogleSuccess = sessionDuck.createAction(types.SIGNIN_GOOGLE_SUCCESS);
export const signInGoogleFailure = sessionDuck.createAction(types.SIGNIN_GOOGLE_FAILURE);

export const refreshSessionRequest = sessionDuck.createAction(
	types.REFRESH_SESSION_REQUEST,
);
export const refreshSessionSuccess = sessionDuck.createAction(
	types.REFRESH_SESSION_SUCCESS,
);
export const refreshSessionFailure = sessionDuck.createAction(
	types.REFRESH_SESSION_FAILURE,
);

export const signOutRequest = sessionDuck.createAction(types.SIGNOUT_REQUEST);
export const signOutSuccess = sessionDuck.createAction(types.SIGNOUT_SUCCESS);
export const signOutFailure = sessionDuck.createAction(types.SIGNOUT_FAILURE);

//Clear ducks
export const clearDuck = sessionDuck.createAction(types.CLEAR_SESSION_DUCKS);

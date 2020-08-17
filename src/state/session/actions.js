// Redux Ducks
import sessionDuck from "state/session";
import * as types from "state/session/types";

export const signInRequest = sessionDuck.createAction(types.SIGNIN_REQUEST);
export const signInSuccess = sessionDuck.createAction(types.SIGNIN_SUCCESS);
export const signInFailure = sessionDuck.createAction(types.SIGNIN_FAILURE);

export const signInGoogleRequest = sessionDuck.createAction(types.SIGNIN_GOOGLE_REQUEST);
export const signInGoogleSuccess = sessionDuck.createAction(types.SIGNIN_GOOGLE_SUCCESS);
export const signInGoogleFailure = sessionDuck.createAction(types.SIGNIN_GOOGLE_FAILURE);

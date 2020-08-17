// Redux Ducks
import sessionDuck from "state/session";

export const SIGNIN_REQUEST = sessionDuck.defineType("SIGNIN_REQUEST");
export const SIGNIN_SUCCESS = sessionDuck.defineType("SIGNIN_SUCCESS");
export const SIGNIN_FAILURE = sessionDuck.defineType("SIGNIN_FAILURE");

export const SIGNIN_GOOGLE_REQUEST = sessionDuck.defineType("SIGNIN_GOOGLE_REQUEST");
export const SIGNIN_GOOGLE_SUCCESS = sessionDuck.defineType("SIGNIN_GOOGLE_SUCCESS");
export const SIGNIN_GOOGLE_FAILURE = sessionDuck.defineType("SIGNIN_GOOGLE_FAILURE");

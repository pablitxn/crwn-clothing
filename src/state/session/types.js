// Redux Ducks
import sessionDuck from "state/session";

export const SIGNIN_REQUEST = sessionDuck.defineType("SIGNIN_REQUEST");
export const SIGNIN_SUCCESS = sessionDuck.defineType("SIGNIN_SUCCESS");
export const SIGNIN_FAILURE = sessionDuck.defineType("SIGNIN_FAILURE");

export const SIGNIN_GOOGLE_REQUEST = sessionDuck.defineType("SIGNIN_GOOGLE_REQUEST");
export const SIGNIN_GOOGLE_SUCCESS = sessionDuck.defineType("SIGNIN_GOOGLE_SUCCESS");
export const SIGNIN_GOOGLE_FAILURE = sessionDuck.defineType("SIGNIN_GOOGLE_FAILURE");

export const REFRESH_SESSION_REQUEST = sessionDuck.defineType("REFRESH_SESSION_REQUEST");
export const REFRESH_SESSION_SUCCESS = sessionDuck.defineType("REFRESH_SESSION_SUCCESS");
export const REFRESH_SESSION_FAILURE = sessionDuck.defineType("REFRESH_SESSION_FAILURE");

export const SIGNOUT_REQUEST = sessionDuck.defineType("SIGNOUT_REQUEST");
export const SIGNOUT_SUCCESS = sessionDuck.defineType("SIGNOUT_SUCCESS");
export const SIGNOUT_FAILURE = sessionDuck.defineType("SIGNOUT_FAILURE");

// Clear Ducks
export const CLEAR_SESSION_DUCKS = sessionDuck.defineType("CLEAR_SESSION_DUCKS");

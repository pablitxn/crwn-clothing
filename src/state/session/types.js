// Redux Ducks
import authDuck from "state/auth";

export const LOGIN_REQUEST = authDuck.defineType("LOGIN_REQUEST");
export const LOGIN_SUCCESS = authDuck.defineType("LOGIN_SUCCESS");
export const LOGIN_FAILURE = authDuck.defineType("LOGIN_FAILURE");

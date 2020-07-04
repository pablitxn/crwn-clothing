// Redux Ducks
import authDuck from "state/auth";
import * as types from "state/auth/types";

export const requestLogin = authDuck.createAction(types.LOGIN_REQUEST);
export const successLogin = authDuck.createAction(types.LOGIN_SUCCESS);
export const failureLogin = authDuck.createAction(types.LOGIN_FAILURE);

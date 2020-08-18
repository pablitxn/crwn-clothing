import clearStoreDuck from ".";
import * as types from "./types";

export const clearDucks = clearStoreDuck.createAction(types.CLEAR_STORE);

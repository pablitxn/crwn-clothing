// Redux
import { createSelector } from "reselect";

// Reducers
const AuthReducer = ({ Auth }) => Auth;

export const loginSelector = createSelector([AuthReducer], Auth => Auth.login);

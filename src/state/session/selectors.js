// Redux
import { createSelector } from "reselect";

// Reducers
const sessionReducer = ({ session }) => session;

export const signInSelector = createSelector(
	[sessionReducer],
	(session) => session.signIn,
);

export const signInGoogleSelector = createSelector(
	[sessionReducer],
	(session) => session.signInGoogle,
);

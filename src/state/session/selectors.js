// Redux
import { createSelector } from "reselect";

// Reducers
const sessionReducer = ({ Session }) => Session;

export const signInSelector = createSelector(
	[sessionReducer],
	(session) => session.signIn,
);

export const signInGoogleSelector = createSelector(
	[sessionReducer],
	(session) => session.signInGoogle,
);

export const activeUserSelector = createSelector(
	[sessionReducer],
	(session) => session.activeUser,
);

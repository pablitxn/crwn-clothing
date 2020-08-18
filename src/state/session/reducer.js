// Redux Ducks
import sessionDuck from "state/session";
import * as types from "state/session/types";

const initialState = {
	signIn: {
		loading: false,
		error: null,
		data: null,
	},
	signInGoogle: {
		loading: false,
		error: null,
		data: null,
	},
	signOut: {
		loading: false,
		error: null,
		data: null,
	},
	activeUser: null,
};

const reducer = sessionDuck.createReducer(
	{
		// Sign in with account
		[types.SIGNIN_REQUEST]: (state) => ({
			...state,
			signIn: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.SIGNIN_SUCCESS]: (state, { payload }) => ({
			...state,
			signIn: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.SIGNIN_FAILURE]: (state, { payload }) => ({
			...state,
			signIn: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		// Sign in with google
		[types.SIGNIN_GOOGLE_REQUEST]: (state) => ({
			...state,
			signInGoogle: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.SIGNIN_GOOGLE_SUCCESS]: (state, { payload }) => ({
			...state,
			signInGoogle: {
				loading: false,
				error: false,
				data: payload,
			},
			activeUser: payload,
		}),
		[types.SIGNIN_GOOGLE_FAILURE]: (state, { payload }) => ({
			...state,
			signInGoogle: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		// Refresh Session
		[types.REFRESH_SESSION_REQUEST]: (state) => ({
			...state,
			refreshSession: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.REFRESH_SESSION_SUCCESS]: (state, { payload }) => ({
			...state,
			refreshSession: {
				loading: false,
				error: false,
				data: payload,
			},
			activeUser: payload,
		}),
		[types.REFRESH_SESSION_FAILURE]: (state, { payload }) => ({
			...state,
			refreshSession: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		// Sign Out
		[types.SIGNOUT_REQUEST]: (state) => ({
			...state,
			signOut: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.SIGNOUT_SUCCESS]: (state, { payload }) => ({
			...state,
			signOut: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.SIGNOUT_FAILURE]: (state, { payload }) => ({
			...state,
			signOut: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		// Clear Ducks
		[types.CLEAR_SESSION_DUCKS]: () => initialState,
	},
	initialState,
);

export default reducer;

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
	},
	initialState,
);

export default reducer;

// Redux Ducks
import authDuck from "state/shop";
import * as types from "state/shop/types";

const initialState = {
	sections: {
		loading: false,
		error: null,
		data: null,
	},
	products: {
		loading: false,
		error: null,
		data: null,
	},
};

const reducer = authDuck.createReducer(
	{
		[types.SECTIONS_REQUEST]: (state) => ({
			...state,
			sections: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.SECTIONS_SUCCESS]: (state, { payload }) => ({
			...state,
			sections: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.SECTIONS_FAILURE]: (state, { payload }) => ({
			...state,
			sections: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		[types.PRODUCTS_REQUEST]: (state) => ({
			...state,
			products: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.PRODUCTS_SUCCESS]: (state, { payload }) => ({
			...state,
			products: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.PRODUCTS_FAILURE]: (state) => ({
			...state,
			products: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		// Clear Ducks
		[types.CLEAR_SHOP_DUCKS]: () => initialState,
	},
	initialState,
);

export default reducer;

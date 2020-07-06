// Redux Ducks
import homeDuck from "state/auth";
import * as types from "state/auth/types";

const initialState = {
  shop_data: {
    loading: false,
    error: null,
    data: null
  }
};

const reducer = homeDuck.createReducer({
  [types.SHOP_DATA_REQUEST]: (state) => ({
    ...state,
    shop_data: {
      loading: true,
      error: false,
      data: null,
    },
  }),
  [types.SHOP_DATA_SUCCESS]: (state, { payload }) => ({
    ...state,
    shop_data: {
      loading: false,
      error: false,
      data: payload,
    },
  }),
  [types.SHOP_DATA_FAILURE]: (state) => ({
    ...state,
    shop_data: {
      loading: false,
      error: true,
      data: null,
    },
  }),
},
  initialState,
);

export default reducer;
// Redux Ducks
import authDuck from "state/auth";
import * as types from "state/auth/types";

const initialState = {
  login: {
    loading: false,
    error: null,
    data: null
  }
};

const reducer = authDuck.createReducer({
  [types.LOGIN_REQUEST]: (state) => ({
    ...state,
    login: {
      loading: true,
      error: false,
      data: null,
    },
  }),
  [types.LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    login: {
      loading: false,
      error: false,
      data: payload,
    },
  }),
  [types.LOGIN_FAILURE]: (state) => ({
    ...state,
    login: {
      loading: false,
      error: true,
      data: null,
    },
  }),
},
  initialState,
);

export default reducer;
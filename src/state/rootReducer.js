import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

export default createRootReducer;

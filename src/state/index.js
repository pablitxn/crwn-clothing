import { createStore } from "redux";
import { createBrowserHistory } from "history";
// Reducers
import createRootReducer from "./rootReducer";

const history = createBrowserHistory();
let store;
export { store, history };

const makeStore = (initialState = {}) => {
  store = createStore(
    createRootReducer(history),
    initialState,
  );
  return store;
}

export default makeStore;

// Redux
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
// Router
import { createBrowserHistory } from "history";
// Reducers & Sagas
import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// Definitions
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleWare = createLogger({
  collapsed: true,
});
let store;
let middlewares = [];

export default function makeStore(initialState = {}) {
  if (process.env.NODE_ENV === "development") middlewares.push(loggerMiddleWare);
  middlewares.push(routerMiddleware(history));
  middlewares.push(sagaMiddleware);

  store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export { store, history };

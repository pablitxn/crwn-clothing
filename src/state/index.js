// Redux
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
// Redux Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Redux Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "state/rootSaga";
// Reducers
import createRootReducer from "state/rootReducer";
// Router
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

// Definitions
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleWare = createLogger({
	collapsed: true,
});
const persistConfig = {
	key: "root",
	storage,
};
let store;
let persistor;
let middlewares = [];

const makeStore = (initialState = {}) => {
	if (process.env.NODE_ENV === "development") {
		middlewares.push(loggerMiddleWare);
	}
	middlewares.push(routerMiddleware(history));
	middlewares.push(sagaMiddleware);

	// Persist reducer
	const rootReducer = createRootReducer(history);
	const persistedReducer = persistReducer(persistConfig, rootReducer);

	store = createStore(
		persistedReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares)),
	);

	// Persist store
	persistor = persistStore(store);

	sagaMiddleware.run(rootSaga);

	return { store, persistor };
};

export { store, persistor, history };

export default makeStore;

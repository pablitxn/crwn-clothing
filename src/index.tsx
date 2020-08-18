// React
import React from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { PersistGate } from "redux-persist/integration/react";
// Router
import { ConnectedRouter } from "connected-react-router";
// App
import App from "./App";

const { store, persistor } = makeStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root"),
);

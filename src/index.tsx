import React from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
// Router
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";
// React App
import App from "./App";

const store = makeStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);
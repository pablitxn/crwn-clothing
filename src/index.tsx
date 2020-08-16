// React
import React from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
import makeStore, { history } from "state";
// Router
import { ConnectedRouter } from "connected-react-router";
// App
import App from "./App";

const store = makeStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root"),
);

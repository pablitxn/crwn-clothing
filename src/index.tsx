// React Core
import React from "react";
import ReactDOM from "react-dom";
// Router
import { BrowserRouter } from "react-router-dom";
// Global Styles
import "./index.css";
// Our App
import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root"),
);

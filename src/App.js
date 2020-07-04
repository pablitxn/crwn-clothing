import React from "react";
// Custom Components
import Header from "components/Header";
import HomePage from "pages/HomePage";
import ShopPage from "pages/Shop";
import Auth from "pages/Auth";
// Router
import { Switch, Route } from "react-router-dom";
// Global Styles
import "./App.css";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/auth" component={Auth} />
			</Switch>
		</div>
	);
}

export default App;

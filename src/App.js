import React from "react";
// Custom Components
import Header from "components/header";
import HomePage from "./pages/homepage";
import ShopPage from "pages/shop";
import SignInAndSignUpPage from "pages/sign-in-and-sign-up";
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
				<Route path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;

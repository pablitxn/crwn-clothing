// React
import React, { FC } from "react";
// Router
import { Switch, Route, Redirect } from "react-router-dom";
import RouteWithSubRoutes from "containers/RouteWithSubRoutes";
import routes from "./routes";
// Containers
import ShopContainer from "containers/Shop";
import Navbar from "components/_shared/Navbar";

const App: FC = () => (
	<>
		<Navbar />
		<Switch>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
			))}
			<Route path="/" render={() => <ShopContainer />} />
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	</>
);

export default App;

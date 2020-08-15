// React
import React, { FC } from "react";
// Router
import { Switch, Route, Redirect } from "react-router-dom";
import RouteWithSubRoutes from "containers/RouteWithSubRoutes";
// Containers
import ShopContainer from "containers/Shop";
// Types
import { IHandleSwitch } from "./types";

const HandleSwitch: FC<IHandleSwitch> = ({ routes }) => {
	return (
		<Switch>
			{routes.map((route: any, i: number) => (
				<RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
			))}
			<Route path="/" render={() => <ShopContainer />} />
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	);
};

export default HandleSwitch;

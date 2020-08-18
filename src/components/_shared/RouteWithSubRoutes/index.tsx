import React from "react";
// Custom Components
import { Route } from "react-router-dom";
// Types
import { IRouteWithSubRoutes } from "./types";

const RouteWithSubRoutes = (route: IRouteWithSubRoutes) => {
	return (
		<Route
			path={route.path}
			render={(props) => {
				return <route.component {...props} props={route.props} routes={route.routes} />;
			}}
		/>
	);
};

export default RouteWithSubRoutes;

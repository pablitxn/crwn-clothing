import React from "react";
// Custom Components
import { Route } from "react-router-dom";
// Types
import { Route as RouteTypes } from "./types";

const RouteWithSubRoutes = (route: RouteTypes) => {
	return (
		<Route
			path={route.path}
			render={(props) => (
				<route.component {...props} props={route.props} routes={route.routes} />
			)}
		/>
	);
};

export default RouteWithSubRoutes;

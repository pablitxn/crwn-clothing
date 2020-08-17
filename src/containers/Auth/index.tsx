// React
import React, { FC, Suspense } from "react";
// Components
import RouteWithSubRoutes from "components/_shared/RouteWithSubRoutes";
// Router
import { Switch } from "react-router-dom";
import routes from "./routes";

const SessionContainer: FC = () => (
	<Suspense fallback={<span>loading...</span>}>
		<Switch>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
			))}
		</Switch>
	</Suspense>
);

export default SessionContainer;

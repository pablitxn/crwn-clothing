// React
import React, { FC, Suspense } from "react";
// Components
import RouteWithSubRoutes from "containers/RouteWithSubRoutes";
import SuspenseLoader from "components/_shared/SuspenseLoader";
// Router
import { Switch } from "react-router-dom";
import routes from "./routes";

const ShopContainer: FC = () => (
	<Suspense fallback={<SuspenseLoader />}>
		<Switch>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
			))}
		</Switch>
	</Suspense>
);

export default ShopContainer;

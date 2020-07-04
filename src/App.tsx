import React, { FC } from "react";
// Router
import { Switch, Route, Redirect } from "react-router-dom";
import RouteWithSubRoutes from "components/_shared/RouteWithSubRoutes";
import routes from "./routes";
// Containers
import HomeContainer from "containers/Home";

const App: FC = () => (
	<Switch>
		{routes.map((route, i) => (
			<RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
		))}
		<Route
			path="/"
			render={() =>
				localStorage.getItem("access_token") ? (
					<HomeContainer />
				) : (
						<Redirect to="/login" />
					)
			}
		/>
		<Route path="*">
			<Redirect to="/" />
		</Route>
	</Switch>
);

export default App;

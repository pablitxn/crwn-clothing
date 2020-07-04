// React
import React, { FC, Suspense } from "react";
// Components
import RouteWithSubRoutes from "components/_shared/RouteWithSubRoutes";
import SuspenseLoader from "components/_shared/SuspenseLoader";
// Router
import { Switch } from "react-router-dom";
import routes from "./routes";

const HomeContainer: FC<React.LazyExoticComponent<React.FC>> = () => (
  <Suspense fallback={<SuspenseLoader />}>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
      ))}
    </Switch>
  </Suspense>

);

export default HomeContainer;

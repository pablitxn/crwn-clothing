import React, { FC } from "react";
// Components
import RouteWithSubRoutes from "components/_shared/RouteWithSubRoutes";
// Router
import { Switch } from "react-router-dom";
import routes from "./routes";

const ShopContainer: FC = () => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
    ))}
  </Switch>
);

export default ShopContainer;

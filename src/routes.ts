// Routes
import sessionRoutes from "containers/Auth/routes";
import shopRoutes from "containers/Shop/routes";
import myAccountRoutes from "containers/MyAccount/routes";

// Containers
import SessionContainer from "containers/Auth";
import ShopContainer from "containers/Shop";
import MyAccountContainer from "containers/MyAccount";

// Types
import { IRouteWithSubRoutes } from "components/_shared/RouteWithSubRoutes/types";

const routes: Array<IRouteWithSubRoutes> = [
  {
    path: "/",
    component: ShopContainer,
    routes: shopRoutes,
    exact: true
  },
  {
    path: "/auth",
    component: SessionContainer,
    routes: sessionRoutes,
  },
  {
    path: "/session",
    component: MyAccountContainer,
    routes: myAccountRoutes,
  }
]

export default routes
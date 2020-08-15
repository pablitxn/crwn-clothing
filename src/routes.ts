// Routes
import sessionRoutes from "containers/Session/routes";
import shopRoutes from "containers/Shop/routes";

// Containers
import SessionContainer from "containers/Session";
import ShopContainer from "containers/Shop";

export default [
  {
    path: "/",
    component: ShopContainer,
    routes: shopRoutes,
    exact: true
  },
  {
    path: "/",
    component: SessionContainer,
    routes: sessionRoutes,
  }
];

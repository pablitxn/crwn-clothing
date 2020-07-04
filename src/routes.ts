// Routes
import authRoutes from "containers/Auth/routes";
import homeRoutes from "containers/Home/routes";
import shopRoutes from "containers/Shop/routes";

// Containers
import AuthContainer from "containers/Auth";
import HomeContainer from "containers/Home";
import ShopContainer from "containers/Shop";

export default [
  {
    path: "/login",
    component: AuthContainer,
    routes: authRoutes,
  },
  {
    path: "/home",
    component: HomeContainer,
    routes: homeRoutes,
  },
  {
    path: "/shop",
    component: ShopContainer,
    routes: shopRoutes,
  },
];

// Routes
import sessionRoutes from "containers/Session/routes";
import checkoutRoutes from "containers/Checkout/routes";
import shopRoutes from "containers/Shop/routes";

// Containers
import SessionContainer from "containers/Session";
import CheckoutContainer from "containers/Checkout";
import ShopContainer from "containers/Shop";

export default [
  {
    path: "/",
    component: ShopContainer,
    routes: shopRoutes,
    exact: true
  },
  {
    path: "/session",
    component: SessionContainer,
    routes: sessionRoutes,
  },
  {
    path: "/checkout",
    component: CheckoutContainer,
    routes: checkoutRoutes,
  },
];

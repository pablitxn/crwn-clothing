// React Lazy
import { lazy } from "react";
// Types
import { IRouteWithSubRoutes } from "components/_shared/RouteWithSubRoutes/types"
// Views
const Shop = lazy(() => import("views/Shop"))
const Products = lazy(() => import("views/Shop/Products"))
const Cart = lazy(() => import("views/Shop/Cart"))

const routes: Array<IRouteWithSubRoutes> = [
  {
    path: "/",
    component: Shop,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/cart",
    component: Cart,
  }
]


export default routes
// React Lazy
import { lazy } from "react";
// Views
const Sections = lazy(() => import("views/Shop/Sections"));
const Products = lazy(() => import("views/Shop/Products"));
const Cart = lazy(() => import("views/Shop/Cart"));
const Checkout = lazy(() => import("views/Shop/Checkout"));

export default [
  {
    path: "/",
    component: Sections,
    exact: true
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
];

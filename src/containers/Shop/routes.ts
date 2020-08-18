// React Lazy
import { lazy } from "react";
// Views
const Shop = lazy(() => import("views/Shop"));
const Products = lazy(() => import("views/Shop/Products"));
const Cart = lazy(() => import("views/Shop/Cart"));
const Checkout = lazy(() => import("views/Shop/Checkout"));

export default [
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
  },
  {
    path: "/checkout",
    component: Checkout,
  },
];

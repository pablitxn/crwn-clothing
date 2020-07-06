// React Lazy
import { lazy } from "react";

// Containers
const Checkout = lazy(() => import("views/Checkout"));

export default [
  {
    path: "/checkout",
    component: Checkout,
  },
];

// React Lazy
import { lazy } from "react";

// Containers
const Sections = lazy(() => import("views/Shop/Sections"));
const Products = lazy(() => import("views/Shop/Products"));

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
];

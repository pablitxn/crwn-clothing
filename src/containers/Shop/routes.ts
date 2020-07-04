import { lazy } from "react";

// Containers
const Shop = lazy(() => import("views/Shop"));

export default [
  {
    path: "/shop",
    component: Shop,
    exact: true,
  },
];

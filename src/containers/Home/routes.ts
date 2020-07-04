import { lazy } from "react";

// Containers
const Home = lazy(() => import("views/Home"));

export default [
  {
    path: "/home",
    component: Home,
  },
];

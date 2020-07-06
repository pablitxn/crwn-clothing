import { lazy } from "react";

// Containers
const Home = lazy(() => import("views/Site/Sections"));

export default [
  {
    path: "/home",
    component: Home,
  },
];

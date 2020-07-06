// React Lazy
import { lazy } from "react";

// Containers
const Overview = lazy(() => import("views/Shop/Overview"));
const Preview = lazy(() => import("views/Shop/Preview"));

export default [
  {
    path: "/",
    component: Overview,
    exact: true
  },
  {
    path: "/preview",
    component: Preview,
  },
];

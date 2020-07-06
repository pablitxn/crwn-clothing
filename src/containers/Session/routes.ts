import { lazy } from "react";

// Containers
const Auth = lazy(() => import("views/Auth"));

export default [
  {
    path: "/login",
    component: Auth,
  },
];

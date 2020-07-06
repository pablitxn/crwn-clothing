// React Lazy
import { lazy } from "react";

// Containers
const Session = lazy(() => import("views/Session"));

export default [
  {
    path: "/session",
    component: Session,
  },
];

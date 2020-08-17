// React Lazy
import { lazy } from "react";
// Views
const MyAccountView = lazy(() => import("views/MyAccount"));

export default [
  {
    path: "/session/my-account",
    component: MyAccountView,
  },
];

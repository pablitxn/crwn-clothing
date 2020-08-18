// React Lazy
import { lazy } from "react";
// Types
import { IRouteWithSubRoutes } from "components/_shared/RouteWithSubRoutes/types";
// Views
const SignIn = lazy(() => import("views/Auth/SignIn"));
const SignUp = lazy(() => import("views/Auth/SignUp"));
const ForgotPass = lazy(() => import("views/Auth/ForgotPass"));
const NewPass = lazy(() => import("views/Auth/NewPass"));

const routes: Array<IRouteWithSubRoutes> = [
  {
    path: "/auth/sign-in",
    component: SignIn,
  },
  {
    path: "/auth/sign-up",
    component: SignUp,
  },
  {
    path: "/auth/forgot-pass",
    component: ForgotPass,
  },
  {
    path: "/auth/new-pass",
    component: NewPass,
  },
];

export default routes

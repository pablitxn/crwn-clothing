// React Lazy
import { lazy } from "react";
// Views
const SignIn = lazy(() => import("views/Session/Auth/SignIn"));
const SignUp = lazy(() => import("views/Session/Auth/SignUp"));
const ForgotPass = lazy(() => import("views/Session/Auth/ForgotPass"));
const NewPass = lazy(() => import("views/Session/Auth/NewPass"));
const MyAccount = lazy(() => import("views/Session/ActiveUser/MyAccount"));

export default [
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    path: "/sign-up",
    component: SignUp,
  },
  {
    path: "/forgot-pass",
    component: ForgotPass,
  },
  {
    path: "/new-pass",
    component: NewPass,
  },
  {
    path: "/my-account",
    component: MyAccount,
  },
];

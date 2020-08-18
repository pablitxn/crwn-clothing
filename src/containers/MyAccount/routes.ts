// React Lazy
import { lazy } from "react"
// Types
import { IRouteWithSubRoutes } from "components/_shared/RouteWithSubRoutes/types"
// Views
const MyAccountView = lazy(() => import("views/MyAccount"))

const routes: Array<IRouteWithSubRoutes> = [
  {
    path: "/session/my-account",
    component: MyAccountView,
  },
]

export default routes

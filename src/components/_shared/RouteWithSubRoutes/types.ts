import { LazyExoticComponent, FC } from "react"

export interface IRouteWithSubRoutes {
  path: string
  exact?: boolean
  component: LazyExoticComponent<any> | FC<any>
  props?: Props
  routes?: Array<IRouteWithSubRoutes>
}

type Props = {
  ["key"]: any
}
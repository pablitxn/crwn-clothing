import { UserInfo } from "firebase"

export interface IProfile {
  activeUser: UserInfo
  onSignOut: () => void
}

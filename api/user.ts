import http from "./request"
import { IUserInfo } from "~/models/common"

export const register = (user: IUserInfo) => {
  return http.post<IUserInfo>("/users", { user })
}

export const loginIn = (user: IUserInfo) => {
  return http.post<IUserInfo>("/users/login", { user })
}

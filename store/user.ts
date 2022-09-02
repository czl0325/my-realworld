import { defineStore, acceptHMRUpdate } from "pinia"
import { IUserInfo } from "~/models/common"

export const useUserStore = defineStore("user", {
  state() {
    return {
      bio: null,
      following: false,
      image: "",
      username: "",
      token: ""
    }
  },
  actions: {
    login() {

    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

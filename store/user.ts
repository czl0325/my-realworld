import { ref } from "vue"
import { defineStore, acceptHMRUpdate } from "pinia"
import { IUserInfo } from "~/models/common"
import { loginIn, register } from "~/api/user"

export const useUserStore = defineStore("user", () => {
  const user = ref<IUserInfo>({})
  const signIn = (u: IUserInfo) => {
    return new Promise(resolve => {
      loginIn(u).then(res => {
        user.value = res
        resolve(res)
      })
    })
  }
  const signUp = (u: IUserInfo) => {
    return new Promise(resolve => {
      register(u).then(res => {
        user.value = res
        resolve(res)
      })
    })
  }
  return { user, signIn, signUp }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

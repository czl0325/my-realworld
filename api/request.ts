import { $fetch } from "ohmyfetch"
import { useUserStore } from "~/store/user"

const baseUrl = "https://api.realworld.io/api"

const get = async <T>(url: string, params = {}): Promise<T> => {
  try {
    const store = useUserStore()
    const headers = store.user.token ? {
      authorization: `Token ${store.user.token}`
    } : {}
    return await $fetch<T>(baseUrl + url, {
      headers,
      method: "GET",
      params
    })
  } catch (error) {
    return error
  }
}

const post = async <T>(url: string, params = {}): Promise<T> => {
  try {
    const store = useUserStore()
    const headers = store.user.token ? {
      authorization: `Token ${store.user.token}`
    } : {}
    return await $fetch<T>(baseUrl + url, {
      headers,
      method: 'POST',
      body: params
    })
  } catch (error) {
    return error
  }
}

export default { get, post }

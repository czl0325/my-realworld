import { $fetch } from "ohmyfetch"
import { useUserStore } from "~/store/user"

const baseUrl = "https://api.realworld.io/api"

const get = async <T>(url: string, params = {}): Promise<T> => {
  try {
    const user = useUserStore()
    const headers = user.token ? {
      authorization: `Token ${user.token}`
    } : {}
    const res = await $fetch<T>(baseUrl + url, {
      headers,
      method: "GET",
      params
    })
    return res
  } catch (error) {
    return error
  }
}

const post = async <T>(url: string, params = {}): Promise<T> => {
  try {
    const user = useUserStore()
    const headers = user.token ? {
      authorization: `Token ${user.token}`
    } : {}
    const res = await $fetch<T>(baseUrl + url, {
      headers,
      method: 'POST',
      body: params
    });
    return res;
  } catch (error) {
    return error
  }
}

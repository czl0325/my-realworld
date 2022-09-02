import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@vuestic/nuxt",
    "@pinia/nuxt"
  ],
  router: {
    routes: [
      {
        path: '/',
        name: "HomePage",
        component: fileURLToPath(new URL('./pages/index.vue', import.meta.url))
      },
      {
        path: '/login',
        name: "Login",
        component: fileURLToPath(new URL('./pages/login/index.vue', import.meta.url))
      }
    ]
  }
})

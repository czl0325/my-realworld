<template>
  <div class="login-container">
    <p class="title">{{ isLogin ? "Sign In" : "Sign Up" }}</p>
    <span class="subtitle" @click="isLogin=!isLogin">{{ isLogin ? "Need an account?" : "Have an account?" }}</span>
    <va-form style="width: 300px;">
      <va-input v-if="!isLogin" class="mt-3" v-model="user.username" placeholder="User Name" :rules="[value => (value && value.length > 0) || 'User name is required']"/>
      <va-input class="mt-3" v-model="user.email" placeholder="Email" :rules="[value => (value && value.length > 0) || 'Email is required']"/>
      <va-input class="mt-3" v-model="user.password" type="password" placeholder="Password" :rules="[value => (value && value.length > 0) || 'Password is required']"/>
      <va-button color="primary" class="mt-3" @click="onLogin">{{ isLogin ? "Sign In" : "Sign Up" }}</va-button>
    </va-form>
    <span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useUserStore } from "~/store/user"
import { useRouter } from "#app"

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useUserStore()
    const router = useRouter()
    const isLogin = ref(true)
    const user = reactive({
      username: "",
      email: "",
      password: ""
    })
    const onLogin = () => {
      if (isLogin.value) {
        store.signIn(user).then(res => {
          router.push("/")
        })
      } else {
        store.signUp(user).then(res => {
          router.push("/")
        })
      }
    }
    return {
      isLogin,
      user,
      onLogin
    }
  }
})
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 2.5rem;
    margin: 3rem 0;
  }
  .subtitle {
    color: #5CB85C;
    cursor: pointer;
  }
  .va-form {
    * {
      width: 100%;
    }
  }
}
</style>

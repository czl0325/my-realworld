<template>
  <div class="container">
    <nav class="w-100 px-3 d-flex align-items-center justify-content-between">
      <nuxt-link to="/" class="title">conduit</nuxt-link>
      <div class="right-view">
        <nuxt-link to="/" >Home</nuxt-link>
        <nuxt-link to="/login">Sign In</nuxt-link>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  nav {
    width: 100%;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      color: #5CB85C;
      font-family: "Titillium Web", sans-serif;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .right-view {
      display: flex;
      align-items: center;
      * + * {
        margin-left: 1.5rem;
      }
    }
  }
}
</style>

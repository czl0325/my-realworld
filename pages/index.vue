<template>
  <div class="home-container">
    <div class="banner">
      <h1 class="title">conduit</h1>
      <p class="subtitle">A place to share your knowledge.</p>
    </div>
    <div class="content">
      <va-tabs v-model="selectTab" color="#5CB85C">
        <template #tabs>
          <va-tab style="width: 120px" :key="0">Global Feed</va-tab>
          <va-tab style="width: 120px" :key="1">My</va-tab>
        </template>
      </va-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const selectTab = ref(0)
    return {
      selectTab
    }
  }
})
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .banner {
    width: 100%;
    background: #5CB85C;
    box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
    color: #fff;
    padding: 2rem;
    box-sizing: border-box;
    margin-bottom: 2rem;
    .title {
      text-shadow: 0px 1px 3px rgb(0 0 0 / 30%);
      font-weight: 700 !important;
      text-align: center;
      font-size: 3.5rem;
      padding-bottom: 0.5rem;
    }
    .subtitle {
      color: #fff;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 300 !important;
      margin-bottom: 0;
    }
  }
  .content {
    width: 80%;
    display: inline-flex;
    flex-direction: column;
  }
}
</style>

<template>
  <div class="layout-container">
    <TheHeader />
    <HomeView />
  </div>
</template>

<script setup>
import TheHeader from "./Views/TheHeader.vue"
import HomeView from "./Views/HomeView.vue";
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  width: 100vw;
  background-color: $secondary-background-color;
}
</style>

<template>
  <div class="layout-container">
    <TheHeader />
    <router-view /> <!-- This will display the appropriate component based on the current route -->
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "./Views/TheHeader.vue";
import TheFooter from "./Views/TheFooter.vue";
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  width: 100vw;
  background-color: $secondary-background-color;
  background: url("images/background-landing-image.jpg") no-repeat center center fixed;
}
</style>

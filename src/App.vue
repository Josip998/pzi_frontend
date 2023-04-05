<script setup>
import LayoutView from "./views/LayoutView.vue";
import LoginModal from "./components/LoginModal.vue";
import { ref } from "vue";

const loginValue = ref(false)

function showLoginModal() {
  console.log("changed value to true")
  loginValue.value = true
}
</script>

<template>
  <div class="layout-container">
    <LoginModal :showModal="loginValue" />
    <LayoutView @showLogin="showLoginModal()" />
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  width: 100vw;
}
</style>

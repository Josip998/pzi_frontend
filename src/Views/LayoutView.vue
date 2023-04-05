<script setup>
import NavigationBar from "../components/NavigationBar.vue";
import AppHeader from "../components/AppHeader.vue";
import { defineEmits } from 'vue'

const emits = defineEmits(['showLogin'])

function showLoginModal() {
  console.log("changed value to true")
  emits('showLogin')
}
</script>

<template>
  <div class="full-page">
    <div>

      <v-app class="v-toolbar__content">
        <v-app-bar class="header v-toolbar__content">
          <NavigationBar />
          <app-header @showLogin="showLoginModal()" />
        </v-app-bar>
      </v-app>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.full-page {
  height: auto;
  width: 100%;
  background-color: $primary-background-color;
}

.header {
  display: flex;
}

.v-toolbar__content {
  height: 104px;
}

.v-application__wrap {
  height: 5px;
}
</style>
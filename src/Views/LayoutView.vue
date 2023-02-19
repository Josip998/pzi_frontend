<script setup>
import NavigationBar from "../components/NavigationBar.vue";
import AppHeader from "../components/AppHeader.vue";
</script>

<template>
  <div class="full-page">
    <div class="v-toolbar__content">
      <v-app class="v-toolbar__content">
        <v-app-bar app class="header v-toolbar__content">
          <NavigationBar />
          <AppHeader />
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
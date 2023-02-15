<script setup>
import NavigationBar from "../components/NavigationBar.vue";
</script>

<template>
    <div class="full-page">
        <v-app>
             <v-app-bar app>
                <NavigationBar />
             </v-app-bar>
            <router-view />
        </v-app>
    </div>
</template>

<style scoped lang="scss">
.full-page{
    height: 100%;
    width: 100%;
    background-color: $primary-background-color;
}
</style>
<template>
  <div class="model-cards">
    <!-- Loop through the models array provided by the parent -->
    <ModelCard v-for="model in models" :isAdmin="userIsAdmin" :key="model.id" :model="model" />
  </div>
</template>

<script setup>
import ModelCard from "./ModelCard.vue";
import { ref, computed, defineProps } from "vue";



// Use defineProps to access the 'models' prop provided by the parent
const props = defineProps(["models"]);

// Assume you have access to the user's role information, e.g., from a computed property
const userIsAdmin = computed(() => {
  // Replace this with your actual logic to determine if the user is an admin
  return true; // Set to true if the user is an admin, false otherwise
});
</script>

<style scoped lang="scss">
.model-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>




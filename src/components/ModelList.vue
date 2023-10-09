<template>
  <div class="model-cards">
    <!-- Loop through the models array provided by the parent component -->
    <ModelCard v-for="model in models" :key="model.id" :model="model" />
  </div>
</template>

<script setup>
import ModelCard from "./ModelCard.vue";
import { ref, defineProps } from "vue";

// Use defineProps to access the 'models' prop provided by the parent
const props = defineProps(["models"]);
</script>

<style scoped lang="scss">
.model-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>



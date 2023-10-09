<template>
  <div class="buy-3D">
    <div class="model-list">
      <h2 class="header-title">3D MODELS FOR SALE</h2>
      <!-- Pass the fetched data as a prop to ModelList -->
      <ModelList :models="fetchedModels" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref from Vue
import ModelList from '@/components/ModelList.vue';
import axios from 'axios';

// Define a ref to hold the fetched models
const fetchedModels = ref([]);

// Fetch data when the component is mounted
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/resource");
    // Assign the fetched data to the ref
    fetchedModels.value = response.data.resources;
    console.log("Fetched Data:", fetchedModels.value);
  } catch (err) {
    console.error("Error fetching models:", err);
  }
});
</script>

<style lang="scss" scoped>
.buy-3D {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 91vh; /* Adjust the height as needed */
  width: 100%;
  overflow-y: auto;
  background-size: cover; /* Ensure the background image covers the entire container */
}

.model-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  max-height: 91vh;
  width: auto;
  max-width: 100vh;
  justify-content: flex-start;
}

.header-title {
  background: linear-gradient(to bottom, #b1b1b4, #f3efef);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 36px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
}
/* Add styles for the ModelList component and ModelCard components as needed */
</style>

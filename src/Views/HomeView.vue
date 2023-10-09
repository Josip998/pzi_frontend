<template>
  <div class="window">
    <div class="center">
      <!-- Show the search bar and button with animation -->
      <div v-if="showSearch" class="search-area" :class="{ 'search-visible': showSearch }">
        <input type="text" v-model="searchTerm" placeholder="Search for a model" />
        <button class="search-button" @click="searchModels">Search</button>
      </div>

      <!-- Display search results here if searchResults is not empty -->
      <div v-if="searchResults.length > 0" class="model-cards">
        <ModelCard v-for="model in searchResults" :key="model.id" :model="model" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ModelCard from '@/components/ModelCard.vue'; // Import the ModelCard component

const searchTerm = ref('');
const searchResults = ref([]);
const showSearch = ref(true); // Initially show the search bar and button

const searchModels = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/search?query=${searchTerm.value}`);
    
    // Check if the response contains 'results' property
    if (response.data.hasOwnProperty('results')) {
      searchResults.value = response.data.results;
    } else {
      // If 'results' property is not present, assume the response itself is an array of results
      searchResults.value = response.data;
    }

    // Hide the search bar and button after successful search
    showSearch.value = false;
  } catch (error) {
    console.error('Error searching models:', error);
  }
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
}

/* Add animation styles */
.search-area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 40%;
  background-color: $tertiary-background-color;
  border-radius: 4px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(-10px);
}

/* Apply animation when the search bar is visible */
.search-visible {
  opacity: 1;
  transform: translateY(0);
}

.search-button {
  height: 100%;
  width: 40%;
  background-color: $secondary-background-color;
  border-radius: 4px;
}

/* Add any additional styling you need for your search results */
.model-cards {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.window {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 91vh; /* Adjust the height as needed */
  width: 50%;
  overflow-y: auto;
  background-size: cover; /* Ensure the background image covers the entire container */
}
</style>








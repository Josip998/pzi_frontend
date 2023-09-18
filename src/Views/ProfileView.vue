<template>
 
    <div class="profile-details">
      <!-- Seller's Image -->
      <div class="seller-image">
        <img src="/images/user-avatar.jpg" alt="Seller's Avatar" />
      </div>
  
      <!-- Seller's Information -->
      <div class="seller-info">
        <!-- Seller's Username -->
        <h2>{{ username }}</h2>
  
        <!-- Seller's Email -->
        <h3>{{ email }}</h3>
  
        <!-- Seller's Location -->
        <h3>{{ location }}</h3>
      </div>
  
      <!-- Dummy Models -->
      <h2>Models by {{ username }}</h2>
      <!-- Dummy Model Cards -->
      <div class="dummy-models">
        <ModelCard v-for="model in dummyModels" :key="model.id" :model="model" />
      </div>
    </div>
  
  </template>
  
  <script>
  import ModelCard from "@/components/ModelCard.vue";
  
  export default {
    data() {
      return {
        username: "JohnDoe",
        email: "johndoe@example.com",
        location: "New York, USA",
        dummyModels: [
          {
            id: 1,
            name: "Model 1",
            description: "Description for Model 1",
            imageUrl: "/images/elephant-no-bg.png",
            price: 19.99,
            size: "1/64",
          },
          {
            id: 2,
            name: "Model 2",
            description: "Description for Model 2",
            imageUrl: "/images/elephant-no-bg.png",
            price: 24.99,
            size: "1/64",
          },
        ],
      };
    },
    components: {
      ModelCard,
    },
  };
  </script>
  
  <style scoped>
  .profile-details {
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center children horizontally */
    justify-content: center; /* Center children vertically */
    min-height: 80vh; /* Minimum height to center vertically */
    background: linear-gradient(to bottom, #33333394, #ffffff8e);
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    color: #000;
    width: 40%;
  }
  
  
  .seller-image img {
    max-width: 200px;
    height: auto;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .seller-info {
    text-align: center;
  }
  
  .dummy-models {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px; /* Add spacing between model cards */
  }
  </style>
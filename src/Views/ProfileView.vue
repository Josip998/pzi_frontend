<template>
 
    <div v-if="isLoggedIn" class="profile-details">
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
    <div v-else class="login-links">
        <!-- Display a login/registration form for non-logged-in users -->
        <router-link to="/login" class="link">LOGIN</router-link>
        <router-link to="/register" class="link">REGISTER</router-link>
      </div>
  
  </template>
  
  <script>
  import ModelCard from "@/components/ModelCard.vue";
  
  export default {
    data() {
      return {
        isLoggedIn: false, // Replace with logic to determine login status
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

  .login-links {
  margin: auto;
  margin-top: 100px;
  display: flex;
  align-items: center; /* Center children horizontally */
  justify-content: center; /* Center children vertically */
  min-height: 70vh; /* Minimum height to center vertically */
  background: linear-gradient(to bottom, #101010b6, #ffffff14);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #fef8f8;
  width: 30%;
}

.link {
  text-decoration: none;
  color: #007bff;
  margin: 5px;
  font-weight: bold;
}
.login-links {
  text-align: center; /* Center align the content horizontally */
  padding: 20px; /* Add some padding for spacing */
}

.link {
  display: inline-block; /* Display links inline */
  margin: 10px; /* Add margin between the links */
  padding: 10px 20px; /* Add padding to make the links clickable */
  text-decoration: none; /* Remove underlines from the links */
  background-color: #007bff; /* Set a background color */
  color: #fff; /* Set text color to white */
  border: 1px solid #007bff; /* Add a border */
  border-radius: 5px; /* Round the corners */
  transition: background-color 0.3s ease, color 0.3s ease; /* Add a smooth transition effect */
}

.link:hover {
  background-color: #163ba9; /* Change background color on hover */
  color: #fff; /* Change text color on hover */
  text-decoration: none; /* Remove underlines on hover */
}
  </style>
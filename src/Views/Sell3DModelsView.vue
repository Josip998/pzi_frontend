<template>
    <div class="sell-3d-models">
      <!-- Conditionally render content based on login status -->
      <div v-if="isLoggedIn" class="upload-form">
        <h2>Sell Your 3D Model:</h2>
        <!-- Form for logged-in users to add 3D models -->
        <form @submit.prevent="uploadModel" class="model-form">
          <!-- Input for image upload -->
          <input type="file" accept="image/jpeg, image/png" @change="handleImageUpload" class="file-input" />
  
          <!-- Input fields for model details -->
          <input v-model="modelName" placeholder="Model Name" class="text-input" />
          <textarea v-model="modelDescription" placeholder="Model Description" class="textarea"></textarea>
          <input type="number" v-model="modelPrice" placeholder=" Enter price in $" class="price" />
          <!-- Include other input fields for model details -->
  
          <!-- Display seller information from user profile -->
          <p class="seller-info">Seller: {{ sellerEmail }}</p>
          <p class="seller-info">Location: {{ location }}</p>
  
          <!-- Submit button for adding the model -->
          <button type="submit" class="submit-button">Add Model</button>
        </form>
      </div>
      
      <div v-else class="login-links">
        <!-- Display a login/registration form for non-logged-in users -->
        <router-link to="/login" class="link">LOGIN</router-link>
        <router-link to="/register" class="link">REGISTER</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false, // Replace with logic to determine login status
        modelName: '',
        modelDescription: '',
        modelPrice: '',
        // Include other data properties for model details
        sellerEmail: 'johndoe@example.com', // Load from user profile
        location: 'New York, USA', // Load from user profile
      };
    },
    methods: {
      handleImageUpload(event) {
        // Handle image upload logic
      },
      uploadModel() {
        // Implement logic to upload the 3D model
        // Use data properties like modelName, modelDescription, etc.
      },
    },
  };
  </script>

<style scoped>

.upload-form {
    margin: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column; /* Stack children vertically */
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

.price {
  color: #070707;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #fff;
}
.model-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.file-input {
  margin: 10px 0;
}

.text-input,
.textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #f4f0f0;
}

.submit-button {
  background-color: #bda040b1;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.seller-info {
  font-size: 16px;
  margin-bottom: 10px;

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

input::placeholder,
textarea::placeholder {
    color: #fff;
}

.file-input {
    color: #fff;
}

.submit-button:hover {
    background-color: #8e5a07;
  }

</style>
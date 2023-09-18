<template>
    <div class="custom">
    <div class="custom-3d-models">
      <!-- Check if the user is logged in -->
      <div v-if="isLoggedIn">
        <!-- Show custom orders for logged-in users -->
        <h1>Your Custom 3D Models</h1>
        <!-- Display custom orders for the logged-in user -->
        <div class="custom-orders">
          <!-- Loop through custom orders and display them -->
          <div v-for="customOrder in customOrders" :key="customOrder.id" class="custom-order">
            <!-- Display custom order details -->
            <h2>{{ customOrder.name }}</h2>
            <p>{{ customOrder.description }}</p>
            <!-- Add more custom order details as needed -->
          </div>
        </div>
      </div>
      <!-- Display a form for non-logged-in users to submit custom orders -->
      <div v-else>
        <h1>Order a Custom 3D Model</h1>
        <!-- Custom order form for non-logged-in users -->
        <form @submit.prevent="submitCustomOrder" class="custom-order-form">
          <!-- Input fields for the custom order -->
          <div class="form-group">
            <input type="text" id="name" placeholder="Your name" v-model="order.name" required />
          </div>
          <div class="form-group">
            <textarea id="description" placeholder="Description" v-model="order.description" required></textarea>
          </div>
          <!-- File input for image upload -->
          <div class="form-group">
            <label for="imageUrl">Image (JPEG or PNG)</label>
            <input type="file" id="imageUrl" accept="image/jpeg, image/png" @change="onFileChange" required />
          </div>
          <div class="form-group">
            <input type="email" id="email" placeholder="Email (for notifications)" v-model="order.email" required />
          </div>
          <!-- Submit button -->
          <button type="submit" class="submit-button">Submit Custom Order</button>
        </form>
      </div>
    </div>
   </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false, // Set this based on user authentication status
        customOrders: [], // Initialize with custom orders for logged-in users
        order: {
          name: '',
          description: '',
          imageUrl: '',
          email: '',
        },
      };
    },
    methods: {
      // Method to handle file input change
      onFileChange(event) {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          // Handle the selected file, e.g., store it in your data
          this.order.imageUrl = URL.createObjectURL(selectedFile);
        }
      },
      // Method to submit a custom order
      submitCustomOrder() {
        // Implement your logic to submit the custom order, e.g., send it to a server
        // Access the custom order data in this.order
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add CSS styles for your component here */
  .custom-3d-models {
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

  
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .custom-order-form .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  input[type="file"] {
    display: none; /* Hide the default file input */
  }
  
  .submit-button {
    background-color: #bda040b1;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #8e5a07;
  }

  input::placeholder,
textarea::placeholder {
    color: #fff;
}
  
  </style>
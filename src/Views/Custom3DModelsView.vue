<template>
  <div class="custom">
    <div class="custom-3d-models">
      <!-- Check if the user is logged in -->
      <div v-if="isLoggedIn">
        <!-- Show custom orders for logged-in users -->
        <h1>Custom 3D Models Requests</h1>
        <!-- Display custom orders for the logged-in user -->
        <div class="custom-orders">
          <div class="order">
          <!-- Loop through custom orders and display them -->
          <div
            v-for="customOrder in customOrders"
            :key="customOrder.id"
            class="custom-order"
          >
            
            <!-- Display custom order details -->
            <h2>Order Name: {{ customOrder.name }}</h2>
            <p>Description: {{ customOrder.description }}</p>
            <p>Contact Email: {{ customOrder.email }}</p>
            <img src="customOrder.image" alt="Custom Order Image">
            <!-- Add more custom order details as needed -->
          </div>
        </div>
      </div>
      </div>
      <!-- Display a form for non-logged-in users to submit custom orders -->
      <div v-else>
        <h1>Order a Custom 3D Model:</h1>
        <!-- File input for image upload -->
        <div class="form-group">
          <label for="imageUrl">Image (JPEG or PNG)</label>
          <input
            type="file"
            id="imageUrl"
            accept="image/jpeg, image/png"
            @change="onFileChange"
            required
          />
        </div>
        <!-- Custom order form for non-logged-in users -->
        <form @submit.prevent="submitCustomOrder" class="custom-order-form">
          <!-- Input fields for the custom order -->
          <div class="form-group">
            <input
              type="text"
              id="name"
              placeholder="Your name"
              v-model="order.name"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              id="description"
              placeholder="Description"
              v-model="order.description"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email (for notifications)"
              v-model="order.email"
              required
            />
          </div>
          <!-- Submit button -->
          <button type="submit" class="submit-button">
            Submit Custom Order
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isLoggedIn: true,
      customOrders: [],
      order: {
        name: "",
        description: "",
        imageUrl: "",
        email: "",
      },
    };
  },
  created() {
    // Fetch custom resource requests from the backend
    axios
      .get("http://localhost:8000/api/custom-resource-requests")
      .then((response) => {
        this.customOrders = response.data.customResourceRequests;
      })
      .catch((error) => {
        console.error("Error fetching custom resource requests:", error);
      });
  },
  methods: {
    // Method to handle file input change
    onFileChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        // Handle the selected file, e.g., store it in your data
        this.order.imageUrl = selectedFile;
      }
    },
    // Method to submit a custom order
    submitCustomOrder() {
      // Create a FormData object to send file data
      const formData = new FormData();
      formData.append("name", this.order.name);
      formData.append("description", this.order.description);
      formData.append("image", this.order.imageUrl);
      formData.append("email", this.order.email);

      // Make an Axios POST request to your Laravel backend
      axios
        .post("http://localhost:8000/api/custom-resource-request", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for file upload
          },
        })
        .then((response) => {
          // Handle the success response from the server
          alert("Custom order submitted successfully")
          // Optionally, you can reset the form and update the customOrders data
          this.order = {
            name: "",
            description: "",
            imageUrl: "",
            email: "",
          };
          // Fetch updated custom orders (if needed) and update this.customOrders
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error("Error submitting custom order:", error);
        });
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
  background: linear-gradient(to bottom, #131212b6, #ffffff14);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #fef8f8;
  width: 30%;
}


.order {
  max-height: 500px; /* Set the maximum height for the container */
  overflow-y: auto; /* Add a vertical scrollbar when content overflows */
  border: 1px solid rgb(186, 184, 184);
  border-radius: 4px;
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

.submit-button {
  background-color: #bda040b1;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.submit-button:hover {
  background-color: #8e5a07;
}

input::placeholder,
textarea::placeholder {
  color: #fff;
}

.custom-orders {
  margin: auto;
  overflow-y: auto;
}

.custom-order {
  border: 1px solid #e0e0e0;
  padding: 10px;
  border-radius: 4px;
  background-color: #fef8f806;
}

.custom-order h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

</style>

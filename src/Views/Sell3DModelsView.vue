<template>
  <div class="custom">
    <div class="custom-3d-models">
      <!-- Display a form for non-logged-in users to submit custom orders -->
      <div v-if="isLoggedIn">
        <h1>Add a 3D Model:</h1>
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
              placeholder="Model Name"
              v-model="order.name"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              id="description"
              placeholder="Model Description"
              v-model="order.description"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <input
              type="decimal"
              id="price"
              placeholder="Model Price"
              v-model="order.price"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              id="size"
              placeholder="Model Size"
              v-model="order.size"
              required
            />
          </div>
          <!-- Submit button -->
          <button type="submit" class="submit-button">Add Model</button>
        </form>
      </div>
      <!-- For non logged in users -->
      <div v-else>
        <h3>You are not logged in.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Import Axios

export default {
  data() {
    return {
      isLoggedIn: !!localStorage.getItem('token'), // Check if the user is logged in
      user_id: null, // Initialize user_id as null
      order: {
        name: "",
        description: "",
        imageUrl: "",
        price: "",
        size: "",
      },
      user_id: 8, // How to take this from the login session????
    };
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
      formData.append("price", this.order.price);
      formData.append("size", this.order.size);

      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }

      // Make an Axios POST request to your Laravel backend
      axios
        .post(`http://localhost:8000/api/user/${this.user_id}/resource`, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for file upload
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
          },
        })
        .then((response) => {
          // Handle the success response from the server
          alert("New model added successfully")
          this.order = {
          name: "",
          description: "",
          imageUrl: "",
          price: "",
          size: "",
        };
          
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error("Error adding new model:", error);
        });
    },
  },
};
</script>

<style scoped>
.form-group {margin-bottom: 5px;}
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

#price {
  border: 1px solid white;
  border-radius: 4px;
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
</style>

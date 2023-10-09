<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          required
        />
      </div>

      <button type="submit">Login</button>
      <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Replace with your actual backend URL
});

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axiosInstance.post("/api/login", this.formData);

        // Check the HTTP status code to verify if the login was successful
            if (response.status === 200) {
      console.log("Login Successful");

      // Store the authentication token in local storage
      const token = response.data.token;
      localStorage.setItem("token", token);

      // Update the isAuthenticated variable
      this.$root.isAuthenticated = true;

      // Assuming you have user data in the response, you can access it like response.data.user
      // You may also want to store user data in a state management store (e.g., Vuex) for use in other components
      const user = response.data.user;

      // Use Vue Router's afterEach navigation guard to refresh the page after route change
      this.$router.afterEach(() => {
        // Refresh the page after the route is fully navigated
        window.location.reload();
      });

      // Redirect to the user's profile page
      this.$router.push('/profile/user'); // Replace "user.id" with the actual user ID
    } else {
          // Handle unexpected response status codes
          console.error("Unexpected Response Status:", response.status);
        }
      } catch (error) {
        // Handle login errors
        console.error("Login Error", error.response.data);
        this.errorMessage = error.response.data.error; // Set the error message
      }
    },
  },
};
</script>

<style scoped>
.login-form {
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

.login-form h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>

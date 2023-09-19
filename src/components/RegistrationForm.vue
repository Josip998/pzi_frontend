<template>
  <div class="registration-form">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <!-- Add additional form fields as needed -->
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" id="location" v-model="formData.location" required />
      </div>

      <button type="submit">Register</button>
      <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div> <!-- Display error message -->
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        location: '', // Added location field
        // Add additional form fields here
      },
      errorMessage: '', // Error message property
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('/auth/register', this.formData);

        // Check the HTTP status code to verify if the registration was successful
        if (response.status === 200 || response.status === 201) {
          // Registration was successful
          console.log('Registration Successful');
          // You can redirect the user to another page if needed
          // this.$router.push('/dashboard');
        } else {
          // Handle unexpected response status codes
          console.error('Unexpected Response Status:', response.status);
        }
      } catch (error) {
        // Handle registration errors (e.g., duplicate email)
        console.error('Registration Error', error.response.data);
        this.errorMessage = error.response.data.error; // Set the error message
      }
    },
  },
};
</script>

<style scoped>
.registration-form {
  padding: 20px;
  background: linear-gradient(to bottom, #484747ac, #ffffff94); /* Gradient background */
  max-width: 400px;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.329);
  color: black;
}

.registration-form h2 {
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
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
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



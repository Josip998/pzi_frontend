<template>
  <div class="registration-form">
    <h2 v-if="!registrationSuccess">Register</h2>
    <form @submit.prevent="registerUser" v-if="!registrationSuccess">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" id="location" v-model="formData.location" required />
      </div>

      <button type="submit">Register</button>
      <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    </form>
    <button v-else @click="redirectToLogin" class="redirect-button">Continue to Login</button>
  </div>
</template>

<script>
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your actual backend URL
});

export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        location: '',
      },
      errorMessage: '',
      registrationSuccess: false,
    };
  },
  methods: {
  async registerUser() {
    try {
      const response = await axiosInstance.post('/api/register', this.formData);

      if (response.status === 200 || response.status === 201) {
        console.log('Registration Successful');
        this.registrationSuccess = true; // Set registration success to true
      } else {
        console.error('Unexpected Response Status:', response.status);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Registration Error', error.response.data);
        this.errorMessage = error.response.data.error;
      } else {
        console.error('Registration Error', error.message);
        this.errorMessage = 'An unexpected error occurred during registration.';
      }
    }
  },

  // Define the method to redirect to the login page
  redirectToLogin() {
    // Redirect to the login page
    this.$router.push('/login'); // Use router.push to navigate to the login page
  },
},

};
</script>



<style scoped>
.registration-form {
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

input[type="text"],
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

.redirect-button {
  background-color: #007bff; /* Blue color */
  color: #fff; /* White text color */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: auto;
}

.redirect-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>




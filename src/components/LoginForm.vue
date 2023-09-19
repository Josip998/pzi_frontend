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
        <input type="password" id="password" v-model="formData.password" required />
      </div>

      <button type="submit">Login</button>
      <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
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
      },
      errorMessage: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('/auth/login', this.formData);

        // Check the HTTP status code to verify if the login was successful
        if (response.status === 200) {
          // Login was successful
          console.log('Login Successful');
          // You can redirect the user to another page if needed
          // this.$router.push('/dashboard');
        } else {
          // Handle unexpected response status codes
          console.error('Unexpected Response Status:', response.status);
        }
      } catch (error) {
        // Handle login errors
        console.error('Login Error', error.response.data);
        this.errorMessage = error.response.data.error; // Set the error message
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  margin-top: 100px;
  padding: 20px;
  background: linear-gradient(to bottom, #484747ac, #ffffff94); /* Gradient background */
  max-width: 400px;
  align-items: center;
  margin: auto;
  
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.329);
  color: black;
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





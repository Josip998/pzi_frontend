<template>
  <div class="header-container">
    <div class="logo container">
      <i class="logo-image"></i>
    </div>
    <div class="routes-container">
      <router-link to="/home">HOME</router-link>
      <router-link to="/3d-models">3D MODELS</router-link>
      <router-link to="/custom-3d-models">CUSTOM 3D MODELS</router-link>
      <router-link to="/sell-3d-models">SELL 3D MODELS</router-link>
      <router-link to="/profile/:username">PROFILE</router-link>
    </div>
    <div class="authentication-container">
      <!-- Display "Logout" button if the user is authenticated -->
      <button v-if="isAuthenticated" @click="logoutUser" class="logout-button">
        LOGOUT
      </button>

      <!-- Display "Login" button if the user is not authenticated -->
      <router-link v-if="!isAuthenticated" to="/login">
        <button class="login-button">LOGIN</button>
      </router-link>

      <!-- Display "Register" button if the user is not authenticated -->
      <router-link v-if="!isAuthenticated" to="/register">
        <button class="signup-button">REGISTER</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      // Access the global isAuthenticated variable
      return this.$root.isAuthenticated;
    },
  },
  methods: {
    async logoutUser() {
      try {
        await axiosInstance.post("/api/logout");

        // Remove the token from local storage
        localStorage.removeItem("token");

        // Redirect the user to the home page
        this.$router.push("/");
      } catch (error) {
        console.error("Logout Error", error.response.data);
      }
    },
  },
};
</script>

<style lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $primary-background-color;
  height: 64px;
  width: 100%;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 64px;
  margin-left: 32px;
}
.logo-image {
  background-image: url("../assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

.search-area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  background-color: $secondary-background-color;
  border-radius: 4px;
  padding: 0 0 0 10px;
  margin: 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.search-area input {
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 4px 0 0 4px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 500;
  color: $primary-text-color;
  outline: none;
}

.routes-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}
.routes-container a {
  text-decoration: none;
  color: $primary-text-color;
  font-size: 14px;
  font-weight: 500;
}
.routes-container a:hover {
  color: $primary-accent-color;
}

.authentication-container {
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10%;

  button {
    padding: 4px;
    height: 60%;
    width: 100%;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  .signup-button {
    background-color: $primary-accent-color;
    color: $primary-text-color;
    margin-right: 10px;
  }

  .login-button {
    background-color: $secondary-accent-color;
    color: $secondary-text-color;
    margin-right: 8px;
  }

  .logout-button {
    background-color: $secondary-accent-color;
    color: $secondary-text-color;
    margin-right: 8px;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    height: auto;
  }

  .logo {
    margin: 0;
  }

  .search-area {
    width: 100%;
    margin: 10px 0;
  }

  .routes-container {
    width: 100%;
    margin: 10px 0;
  }

  .authentication-container {
    width: 100%;
  }
}

@media (max-width: 425px) {
  .search-area {
    padding: 0;
  }

  .search-area input {
    padding: 0;
  }
}
</style>

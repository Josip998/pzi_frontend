<template>
  <div class="profile-details">
    <div class="profile-content">
      <div v-if="isLoading" class="loading-message">
        Loading user profile...
      </div>
      <div v-else-if="user">
        <div class="avatar">
          <img
            src="/images/seller-icon.webp"
            alt="User Avatar"
          />
        </div>
        <!-- Seller's Information -->
        <div class="seller-info">
          <h2 class="username">Username: {{ user.username }}</h2>
          <h3 class="email">Email: {{ user.email }}</h3>
          <h3 class="location">Location: {{ user.location }}</h3>
          <h3>USER ID: {{ user.id }}</h3>
        </div>
      </div>
      <div v-else class="error-message">
        <h3>You are not logged in.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'http://pzi042023.studenti.sum.ba/backend',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  },
});

export default {
  data() {
    return {
      user: null, // User data will be fetched and stored here
      isLoading: true, // Initial loading state
      
    };
  },
  
  async created() {
    try {
      const response = await axiosInstance.get(`/api/user`);
      this.user = response.data; // Assuming the API response contains user data
      this.isLoading = false; // Data has been loaded
          // Check if the user is logged in (assuming you have a way to determine this)
    } catch (error) {
      console.error("Error fetching user data", error);
      this.isLoading = false; // Loading has completed (with an error)
    }
  },
  
  
  
};
</script>



  
<style scoped>
.profile-details {
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
.avatar {
  margin-left: 40px;
  margin-top: 20px;
  max-width: 150px; /* Adjust avatar size as needed */
  margin-bottom: 10px;
  }

.avatar img {
  max-width: 100%;
  }

.profile-content {
  padding: 20px;
  text-align: center;
}

.loading-message,
.error-message {
  margin-top: 20px;
  font-size: 18px;
}

.seller-info {
  text-align: center;
  margin-top: 20px;
}

.username,
.email,
.location {
  margin: 5px 0;
  font-weight: bold;
}

.models-title {
  margin-top: 20px;
  font-size: 24px;
}

.dummy-models {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
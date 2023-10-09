<template>
  <div class="model-card" @click="selectCard">
    <router-link :to="`/card/${model.id}`" class="model-card-link">
      <img :src="model.image" alt="Model Image" class="model-image" />
    </router-link>
    <div class="model-details">
      <h3>{{ model.name }}</h3>
      <p>{{ model.description }}</p>
      <div class="model-specs">
        <div><strong>Price:</strong> ${{ model.price }}</div>
        <div><strong>Size:</strong> {{ model.size }}</div>
      </div>
    </div>
    <!-- Display seller's email, location, and profile if provided as props -->
    <div v-if="showAdditionalInfo" class="additional-info">
      <div><strong>CONTACT SELLER:</strong><h4>{{ model.user_email }}</h4></div>
      <div><strong>Location:</strong><h4>{{ model.user_location }}</h4></div>
      <div><strong>All Models by: {{ model.user_id }} </strong></div>
    </div>

    <!-- Conditionally render edit and delete buttons for admins -->
    <div v-if="isAdmin" class="admin-actions">
      <button @click="editModel" class="admin-button edit-button">Edit</button>
      <button @click="deleteModel" class="admin-button delete-button">Delete</button>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default {
  props: {
    model: Object,
    showAdditionalInfo: Boolean,
  },
  data() {
    return {
      userRole: '', // Store the user's role here
      isAdmin: false, // Flag to check if the user is an admin
    };
  },
  created() {
    // Fetch the user's role from the backend after login
    this.fetchUserRole();
  },
  methods: {
    // Fetch the user's role from the backend
    async fetchUserRole() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };
        const response = await axios.get('http://localhost:8000/api/user/role', config); // Replace with your API endpoint
        this.userRole = response.data.role;
        console.log('User Role:', this.userRole); // Log the user's role
        this.isAdmin = this.userRole === 'admin'; // Check if the user is an admin
      } catch (error) {
        console.error('Error fetching user role', error);
      }
    },
    // Other methods for editing and deleting models
    selectCard() {
      this.$emit('card-selected', this.model);
    },
    editModel() {
      // Navigate to the edit model page with the model's ID as a route parameter
      this.$router.push({ name: 'EditModel', params: { id: this.model.id } });
    },
    deleteModel() {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };

      axios
        .delete(`http://localhost:8000/api/resources/${this.model.id}`, config)
        .then((response) => {
          console.log('Model deleted successfully:', response.data);
          // Reload the current page to reflect changes
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error deleting model:', error);
        });
    },
  },
};
</script>



  
  <style scoped lang="scss">
  .model-card {
    background: linear-gradient(to bottom, #484747ac, #ffffff94); /* Gradient background */
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 5px 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.283);
    width: calc(33.33% - 20px); /* Adjust for the desired number of cards per row */
    color: #000; /* Set the text color to black */
    margin: 10px; /* Add margin to separate the cards */
    cursor: pointer; /* Change cursor to pointer when hovering */
  }
  
  .model-card .model-details p {
    color: #000; /* Set the text color to black or the desired color */
  }
  
  .model-image {
    min-height: 180px;
    max-height: 180px;
    max-width: 100%;
    margin: auto;
    height: auto;
    border-radius: 8px; /* Add border-radius to round the corners of the image */
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
  }
  
  .model-details h3 {
    margin-top: 10px;
    font-size: 18px;
  }
  
  .model-specs {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 14px;
  }
  
  .additional-info {
    padding-top: 25px;
    color: #000;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  
  }
  
  .profile-link {
    color: blue; /* Set the text color to a typical link color */
    text-decoration: underline; /* Add an underline to simulate a link */
    cursor: pointer; /* Change the cursor to a pointer when hovering */
  }
  
  /* You can also define additional styles for hover and visited links */
  .profile-link:hover {
    color: darkblue; /* Change color on hover */
  }
  
  .profile-link:visited {
    color: purple; /* Change color for visited links */
  }

  .admin-actions {
  display: flex;
  justify-content: right;
  margin-bottom: 2px;
}

.admin-button {
  background-color: #007bff; /* Blue color for buttons */
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 15px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s; /* Add a smooth transition effect */
}

.admin-button:hover {
  background-color: #4795e8; /* Darker blue on hover */
}

.edit-button {
  margin-right: 5px;
}

.delete-button {
  background-color: #822525; /* Red color for delete button */
}

.delete-button:hover {
  background-color: #cc0000; /* Darker red on hover */
}
  </style>
<template>
    <div class="edit-model">
      <h1>Edit Model</h1>
      <form @submit.prevent="updateModel">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="editedModel.name" />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="editedModel.description"></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="editedModel.price" />
        </div>
        <div class="form-group">
          <label for="size">Size:</label>
          <input type="text" id="size" v-model="editedModel.size" />
        </div>
        <button type="submit" class="save-button">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        editedModel: {
          name: '',
          description: '',
          price: 0,
          size: '',
        },
      };
    },
    methods: {
      // Fetch the current model data and populate the form
      fetchModelData() {
        // Make an Axios GET request to fetch the current model data
        axios
          .get(`http://localhost:8000/api/resources/${this.$route.params.id}`)
          .then((response) => {
            this.editedModel = response.data;
          })
          .catch((error) => {
            console.error('Error fetching model data:', error);
          });
      },
      // Update the model data with the changes made in the form
      updateModel() {
        // Make an Axios PUT request to update the model data
        axios
          .put(`http://localhost:8000/api/resources/${this.$route.params.id}`, this.editedModel)
          .then((response) => {
            console.log('Model updated successfully:', response.data);
            // Redirect to the model detail view after successful update
            this.$router.push({ name: '3D Models' });
          })
          .catch((error) => {
            console.error('Error updating model:', error);
          });
      },
    },
    created() {
      // Fetch the current model data when the component is created
      this.fetchModelData();
    },
  };
  </script>
  
  <style scoped>
  .edit-model {
    width: 100%;
    max-width: 600px;
    margin: 100px auto;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #1d1c1c67;
    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .edit-model h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button.save-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button.save-button:hover {
    background-color: #0056b3;
  }
  </style>
  
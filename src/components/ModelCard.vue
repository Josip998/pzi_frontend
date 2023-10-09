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
    <!-- Display seller's email, location and profile if provided as props -->
    <div v-if="showAdditionalInfo" class="additional-info">
      <div><strong>CONTACT SELLER:</strong><h4>{{ model.user_email }}</h4></div>
      <div><strong>Location:</strong><h4>{{ model.user_location }}</h4></div>
      <div><strong>All Models by: </strong></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: Object,
    showAdditionalInfo: Boolean,
  },
  emits: ['card-selected'],
  setup(props, { emit }) {
    console.log("Image URL:", props.model.image);
    const selectCard = () => {
      // Emit the custom event and pass the card data as an argument
      emit('card-selected', props.model);
    };

    return {
      selectCard,
    };
  },
};
</script>
  
  <style scoped lang="scss">
  .model-card {
    background: linear-gradient(to bottom, #484747ac, #ffffff94); /* Gradient background */
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
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
    max-width: 100%;
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
  </style>
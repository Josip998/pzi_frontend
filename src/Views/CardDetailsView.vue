<template>
  <div class="card-details">
    <!-- Use the ModelCard component and pass the card details as a prop -->
    <ModelCard :model="cardDetails" :showAdditionalInfo="true" :sellerInfo="sellerInfo" />
    <!-- Display other card details if needed -->
  </div>
</template>

<script>
import ModelCard from "@/components/ModelCard.vue";
import axios from 'axios';

export default {
  components: {
    ModelCard, // Register the ModelCard component
  },
  data() {
    return {
      cardDetails: {}, // Initialize an empty object for the card details
      sellerInfo: null, // Initialize sellerInfo as null
    };
  },
  async created() {
    // Fetch card details based on the model ID from the route parameter
    const modelId = this.$route.params.id;
    try {
      const response = await axios.get(`http://localhost:8000/api/resources/${modelId}`);
      this.cardDetails = response.data; // Update cardDetails with fetched data

      // Fetch seller information based on the user_id from the cardDetails
      const sellerResponse = await axios.get(`http://localhost:8000/api/resources/sellers/${this.cardDetails.user_id}`);
      this.sellerInfo = sellerResponse.data; // Update sellerInfo with fetched seller data
    } catch (error) {
      console.error('Error fetching card details:', error);
    }
  },
};
</script>

<style scoped>
/* Add CSS styles for the card details view here */
.card-details {
  margin-top: 10px; /* 10px space below the header */
  margin-bottom: 10px; /* 10px space above the footer */
  display: flex;
  justify-content: center;
  height: 65vh;
}
</style>



<template>
  <div class="card-details">
    <!-- Use the ModelCard component and pass the card details as a prop -->
    <ModelCard :model="cardDetails" :showAdditionalInfo="true" :sellerEmail="sellerEmail" :location="location" />
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
      sellerEmail: "",
      location: "",
    };
  },
  async created() {
    // Fetch card details based on the model ID from the route parameter
    const modelId = this.$route.params.id;
    try {
      const response = await axios.get(`http://localhost:8000/api/resource/${modelId}`);
      this.cardDetails = response.data; // Update cardDetails with fetched data
      // You can also fetch sellerEmail and location here if needed
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

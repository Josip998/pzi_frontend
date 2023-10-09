<template>
  <div class="card-details">
    <!-- Use the ModelCard component and pass the card details and seller info as props -->
    <ModelCard :model="cardDetails" :showAdditionalInfo="true" :sellerInfo="sellerInfo" />
  </div>
</template>

<script>
import ModelCard from "@/components/ModelCard.vue";
import axios from 'axios';

export default {
  components: {
    ModelCard,
  },
  data() {
    return {
      cardDetails: {},
      sellerInfo: null,
    };
  },
  async created() {
    const modelId = this.$route.params.id;
    try {
      // Fetch card details
      const response = await axios.get(`http://pzi042023.studenti.sum.ba/backend/api/resources/${modelId}`);
      this.cardDetails = response.data;

      // Fetch seller information
      const sellerResponse = await axios.get(`http://pzi042023.studenti.sum.ba/backend/api/resources/sellers/${this.cardDetails.user_id}`);
      this.sellerInfo = sellerResponse.data;
    } catch (error) {
      console.error('Error fetching card details:', error);
    }
  },
};
</script>


<style scoped>
/* Add CSS styles for the card details view here */
.card-details {
  margin: 150px auto;
  display: flex;
  justify-content: center;
  height: 55vh;
}
</style>



<template>
    <div class="card-details">
      <!-- Use the ModelCard component and pass the card details as a prop -->
      <ModelCard :model="cardDetails" :showAdditionalInfo="true" :sellerEmail="sellerEmail" :location="location" />
      <!-- Display other card details if needed -->
    </div>
  </template>
  
  <script>
  import ModelCard from "@/components/ModelCard.vue";
  
  export default {
    components: {
      ModelCard, // Register the ModelCard component
    },
    data() {
      return {
        cardDetails: {
          id: 1,
          name: "Airplane",
          description: "Private airplane model",
          imageUrl: '/images/airplane-no-bg.png',
          price: 19.99,
          size: "1/64",
        },
        sellerEmail: "seller@example.com",
        location: "Guangzhou, China",
        sellerProfile: "/seller-profile",
      };
    },
    created() {
      // Fetch card details or populate cardDetails with data
      // For example, you can fetch data from an API or use dummy data
      // You can also fetch sellerEmail and location from your data source
    },
    methods: {
      // Fetch card details if needed
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
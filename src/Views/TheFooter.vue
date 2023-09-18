<template>
    <footer class="footer-container">
      <div class="footer-content">
        <p>&copy; 2023 Your Company</p>
        <p>Contact: example@email.com</p>
      </div>
    </footer>
  </template>
  
  <style scoped lang="scss">
  .footer-container {
    background-color: $secondary-background-color;
    color: $primary-text-color;
    padding: 1px;
    position: fixed; /* Use fixed positioning */
    bottom: 0; /* Stick it to the bottom of the viewport */
    width: 100%; /* Full width */
  }
  
  .footer-content {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  </style>
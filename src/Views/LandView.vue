<template>
  <div class="project-description">
    <div class="content">
      <h1>Project Description</h1>

      <div class="description-text">
        <p>
          Our project is a web application that allows users to browse, order, and purchase 3D models. The application consists of several main components:
        </p>

        <ul>
          <li>Model Browsing: Users can explore various 3D models available on the platform. They can search for models by categories, ratings, and other filters.</li>
          <li>Model Purchase: Registered users can buy 3D models. Payment is made through secure online transactions.</li>
          <li>User Profiles: Each user has their own personal profile where they can see their purchased models, account settings, and other information.</li>
          <li>Model Upload: Users who are authors of 3D models can upload them to the platform for sale. They can describe the models, add images, and set prices.</li>
          <li>Custom Orders: The application also supports custom orders where users can request the creation of special 3D models according to their specifications.</li>
        </ul>

        <h2>Technologies Used</h2>

        <ul>
          <li>Frontend: The frontend part of the application is built using Vue.js, a popular JavaScript framework for creating user interfaces. It also uses HTML and CSS for structuring and styling web pages.</li>
          <li>Backend: The backend of the application is developed in PHP using Laravel, a popular PHP framework for building web applications. Laravel is used for managing the database, user authentication, request handling, and other backend functionalities.</li>
          <li>Database: A MySQL database is used to store user data, 3D models, and other information.</li>
          <li>Authentication: A secure authentication and authorization system is used for user login and data protection.</li>
          <li>Payment System: An integration with a popular online payment system is used for processing online payments, allowing users to securely complete transactions.</li>
          <li>3D Modeling and Rendering: WebGL technology is used for displaying 3D models on the website, enabling users to view models directly in their web browsers.</li>
        </ul>

        <h2>Project Goal</h2>

        <p>
          The goal of the project is to create an intuitive and attractive web application that provides users with easy access to 3D models, encourages sharing and selling of models, and simplifies the custom order process. This application enables creatives to showcase their 3D modeling skills and allows other users to find models that meet their needs.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-description {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
  animation: fadeIn 1s ease;
}

.content {
  width: 50%;
  margin: 0 auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.description-text {
  line-height: 1.6;
}

.description-text h2 {
  margin-top: 20px;
}
</style>

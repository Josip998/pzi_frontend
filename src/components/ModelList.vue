<template>
    <div class="model-cards">
      <ModelCard v-for="model in models" :key="model.id" :model="model" />
    </div>
  </template>
    
    <script setup>
    import ModelCard from "./ModelCard.vue";
    
    const models = [
      {
        id: 1,
        name: 'Airplane',
        description: 'Private airplane model',
        imageUrl: 'images/airplane-no-bg.png',
        price: 19.99,
        size: "1/64",
      },
      {
        id: 2,
        name: 'Elephant',
        description: 'Magnificent model of an elephant',
        imageUrl: 'images/elephant-no-bg.png',
        price: 24.99,
        size: "1/64",
      },
      {
        id: 3,
        name: 'Airplane',
        description: 'Private airplane model',
        imageUrl: 'images/airplane-no-bg.png',
        price: 19.99,
        size: "1/32",
      },
      {
        id: 4,
        name: 'Elephant',
        description: 'Magnificent model of an elephant',
        imageUrl: 'images/elephant-no-bg.png',
        price: 24.99,
        size: "1/32",
      },
      {
        id: 5,
        name: 'Airplane',
        description: 'Private airplane model',
        imageUrl: 'images/airplane-no-bg.png',
        price: 19.99,
        size: "1/32",
      },
      {
        id: 6,
        name: 'Elephant',
        description: 'Magnificent model of an elephant',
        imageUrl: 'images/elephant-no-bg.png',
        price: 24.99,
        size: "1/16",
      },
      {
        id: 7,
        name: 'Airplane',
        description: 'Private airplane model',
        imageUrl: 'images/airplane-no-bg.png',
        price: 19.99,
        size: "1/16",
      },
      {
        id: 8,
        name: 'Elephant',
        description: 'Magnificent model of an elephant',
        imageUrl: 'images/elephant-no-bg.png',
        price: 24.99,
        size: "1/128",
      },
      {
        id: 9,
        name: 'Airplane',
        description: 'Private airplane model',
        imageUrl: 'images/airplane-no-bg.png',
        price: 19.99,
        size: "1/128",
      },
      {
        id: 10,
        name: 'Elephant',
        description: 'Magnificent model of an elephant',
        imageUrl: 'images/elephant-no-bg.png',
        price: 24.99,
        size: "1/64",
      },
      {
        id: 11,
        name: 'Airplane',
        description: 'Private airplane model',
        imageUrl: 'images/airplane-no-bg.png',
        price: 19.99,
        size: "1/64",
      },
      {
        id: 12,
        name: 'Elephant',
        description: 'Magnificent model of an elephant',
        imageUrl: 'images/elephant-no-bg.png',
        price: 24.99,
        size: "1/55",
      },
      // Add more model objects as needed
    ];
    </script>
    <style scoped lang="scss">
    .model-cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    </style>
<template>
  <div class="center">
    <div class="search-area">
      <input type="text" placeholder="Search for a model" />
      <button class="search-button">Search</button>
    </div>
    <!-- <InfoSection /> -->
  </div>

</template>

<script setup>
//import InfoSection from "../components/InfoSection.vue"
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.search-area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 40%;
  background-color: $tertiary-background-color;
  border-radius: 4px;
}

.search-button {
  height: 100%;
  width: 20%;
  background-color: $secondary-background-color;
  border-radius: 4px;
}


</style>

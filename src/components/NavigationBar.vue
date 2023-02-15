<script></script>

<template>
    <div class="header">
      <router-link to="/home" active-class="selected-link">
        <div>SHOP</div>
      </router-link>
      <router-link to="/guide" active-class="selected-link">
        <div>GUIDE</div>
      </router-link>
      <router-link to="/sell-3d-models" active-class="selected-link">
        <div>SELL 3D</div>
      </router-link>
      <router-link to="/news" active-class="selected-link">
        <div>PROFILE</div>
      </router-link>
    </div>
  </template>

<style scoped lang="scss">
.header {
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    padding: 10px 20px;
    margin: 0 5px;
  }

  a {
    text-decoration: none;
    color: $primary-text-color;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      padding-top: 15px;
    }
  }

  .selected-link {
    border-bottom: 4px solid $primary-accent-color;

    color: $primary-accent-color;
  }
}
</style>
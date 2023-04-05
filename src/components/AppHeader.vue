<script>

export default {
  emits: ['showLogin'],

  methods: {
    showLoginDialog() {
      this.$emit('showLogin')
    },
  },
}
</script>

<template>
  <div class="container">
    <v-btn @click="showLoginDialog">Login</v-btn>
    <v-btn @click="showRegisterDialog">Register</v-btn>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: flex-end;

  div {
    padding: 10px 10px;
    margin: 0 5px;
  }
}
</style>
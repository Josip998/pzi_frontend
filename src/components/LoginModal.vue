<template>
  <v-dialog :model-value="showModal" max-width="500">
    <v-card>
      <v-card-title class="text-h5">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="username" label="Username"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          <v-checkbox v-model="remember" label="Remember Me"></v-checkbox>
          <v-btn type="submit" color="primary">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "LoginModal",

  props: {
    showModal: Boolean,
  },

  setup() {
    const username = ref('')
    const password = ref('')
    const remember = ref(false)

    function login() {
      // Login logic ....

    }

    return {
      username,
      password,
      remember,
      login,
    }
  },
}
</script>




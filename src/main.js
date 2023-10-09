import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

const app = createApp(App);

// Check if token exists in localStorage to determine authentication status
const token = localStorage.getItem('token');
console.log('Token in localStorage:', token); // Add this line for debugging

const isAuthenticated = !!localStorage.getItem('token');
console.log('isAuthenticated:', isAuthenticated); // Debug statement


// Provide the authentication state to all components
app.config.globalProperties.isAuthenticated = isAuthenticated;

app.use(router).use(vuetify).mount('#app');








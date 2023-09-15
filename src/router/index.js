import { createRouter, createWebHistory } from "vue-router"

const routes = [
// create routes for all divs here <div class="3d-models">3D MODELS</div> <div class="custom-3d-models"> CUSTOM 3D MODELS</div> <div class="sell-3d-models">SELL 3D MODELS</div> <div class="profile">PROFILE</div> 
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },

  { path: '/3d-models', name: '3D Models', component: () => import('../views/3DModelsView.vue') },

  { path: '/custom-3d-models', name: 'Custom 3D Models', component: () => import('../views/Custom3DModelsView.vue') },

  { path: '/sell-3d-models', name: 'Sell 3D Models', component: () => import('../views/Sell3DModelsView.vue') },

  { path: '/profile', name: 'Profile', component: () => import('../views/ProfileView.vue') },

  { path: '/login', name: 'Login', component: () => import('../views/LoginView.vue') },

  { path: '/register', name: 'Register', component: () => import('../views/RegisterView.vue') },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

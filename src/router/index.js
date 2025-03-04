import { createRouter, createWebHistory } from "vue-router"

const routes = [
// create routes for all divs here <div class="3d-models">3D MODELS</div> <div class="custom-3d-models"> CUSTOM 3D MODELS</div> <div class="sell-3d-models">SELL 3D MODELS</div> <div class="profile">PROFILE</div> 
  { path: '/', name: 'Land', component: () => import('../Views/LandView.vue') },

  { path: '/home', name: 'Home', component: () => import('../Views/HomeView.vue') },

  { path: '/3d-models', name: '3D Models', component: () => import('../Views/Buy3DModelsView.vue') },

  { path: '/card/:id', name: 'CardDetails', component: () => import('../Views/CardDetailsView.vue'), props: true },

  { path: '/custom-3d-models', name: 'Custom 3D Models', component: () => import('../Views/Custom3DModelsView.vue') },

  { path: '/sell-3d-models', name: 'Sell 3D Models', component: () => import('../Views/Sell3DModelsView.vue') },

  { path: '/profile/user', name: 'Profile', component: () => import('../Views/ProfileView.vue'), props: true },

  { path: '/login', name: 'Login', component: () => import('../components/LoginForm.vue') },

  { path: '/register', name: 'Register', component: () => import('../components/RegistrationForm.vue') },

  { path: '/edit-model/:id', name: 'EditModel', component: () => import('../Views/EditModelView.vue'), props: true },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

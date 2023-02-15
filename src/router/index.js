import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/guide', name: 'Guide', component: GuideView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
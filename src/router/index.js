import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import GuideView from '../views/GuideView.vue'

const routes = [
    { path: '/shop', name: 'Shop', component: ShopView },
    { path: '/guide', name: 'Guide', component: GuideView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
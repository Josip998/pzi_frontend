import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/shop', name: 'Shop', component: () => import('../views/ShopView.vue') },
    { path: '/guide', name: 'Guide', component: () => import('../views/GuideView.vue') },
    { path: '/sell3D', name: 'sell3D', component: () => import('../views/Sell3DView.vue') },
    { path: '/profile', name: 'profile', component: () => import('../views/UserProfileView.vue') },
    { path: '/login', name: 'login', component: () => import('../components/LoginModal.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
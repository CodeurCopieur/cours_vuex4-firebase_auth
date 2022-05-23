import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', component: () => import('../views/Home.vue')},
  {path: '/register', component: () => import('../views/Register.vue')},
  {path: '/sign-in', component: () => import('../views/SignIn.vue')},
  {path: '/feed', component: () => import('../views/Feed.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
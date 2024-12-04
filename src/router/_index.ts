import { createRouter, createWebHistory } from 'vue-router'
import { landingRouters } from './LandingRouter'
import { authRouters } from './auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/layouts/LandingLayout.vue'),
      children: [...landingRouters],
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../layouts/authLayout.vue'),
      children: [...authRouters],
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/Error/NotFount404.vue'),
    },
  ],
})

export default router

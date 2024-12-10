import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'
import { landingRouters } from './LandingRouter'
import { authRouters } from './auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/layouts/LandingLayout.vue'),
      meta: { requiresAuth: false },
      children: [...landingRouters],
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../layouts/authLayout.vue'),
      meta: { requiresAuth: false },
      children: [...authRouters],
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      meta: { requiresAuth: false },
      component: () => import('@/views/Error/NotFount404.vue'),
    },
  ],
})

export const gaurds = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const isLoggedIn = localStorage.getItem('isLogin')

  if (to.meta.requiresAuth && isLoggedIn) {
    return true
  }

  if (to.meta.requiresAuth && !isLoggedIn) {
    return {
      name: 'login',
    }
  }

  if (to.meta.requiresAuth == false) {
    return true
  }
}

router.beforeEach(gaurds)

export default router

export const authRouters = [
  {
    path: '/login',
    alias: '/auth',
    name: 'login',
    meta: { requiresAuth: false },
    component: () => import('../views/auth/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { requiresAuth: false },
    component: () => import('../views/auth/registerView.vue'),
  },
]

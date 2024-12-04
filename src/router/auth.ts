export const authRouters = [
  {
    path: '/login',
    alias: '/auth',
    name: 'login',
    component: () => import('../views/auth/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/registerView.vue'),
  },
]

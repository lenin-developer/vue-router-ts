import HomeView from '../views/Landing/HomeView.vue'
export const landingRouters = [
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true },
    component: HomeView,
  },
  {
    path: '/feature',
    name: 'feature',
    meta: { requiresAuth: true },
    component: () => import('../views/Landing/FeatureView.vue'),
  },
  {
    path: '/pricin',
    name: 'pricin',
    meta: { requiresAuth: true },
    component: () => import('../views/Landing/PrincingView.vue'),
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    meta: { requiresAuth: true },
    props: (router) => {
      const id = router?.params?.id
      return isNaN(id) ? { id: 1 } : { id }
    },
    component: () => import('../views/Landing/PokemonView.vue'),
  },
]

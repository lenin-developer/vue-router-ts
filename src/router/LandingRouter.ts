import HomeView from '../views/Landing/HomeView.vue'
export const landingRouters = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/feature',
    name: 'feature',
    component: () => import('../views/Landing/FeatureView.vue'),
  },
  {
    path: '/pricin',
    name: 'pricin',
    component: () => import('../views/Landing/PrincingView.vue'),
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    props: (router) => {
      const id = router?.params?.id
      return isNaN(id) ? { id: 1 } : { id }
    },
    component: () => import('../views/Landing/PokemonView.vue'),
  },
]

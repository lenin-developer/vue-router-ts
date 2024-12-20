import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Landing/HomeView.vue'

export const validateParamsPokemon = (to: RouteLocationNormalized) => {
  //validando si el parametro id no es numerico, por defecto sera 1
  const validateId = isNaN(to?.params?.id)
  return validateId ? { name: 'pokemon', params: { id: 1 } } : true
}

export const landingRouters: RouteRecordRaw[] = [
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
    component: () => import('@/views/Landing/FeatureView.vue'),
  },
  {
    path: '/pricin',
    name: 'pricin',
    meta: { requiresAuth: true },
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'men',
        name: 'men',
        meta: { transition: 'slide-right' },
        component: () => import('@/components/MenView.vue'),
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'woman',
        name: 'woman',
        meta: { transition: 'slide-left' },
        component: () => import('@/components/WomanView.vue'),
      },
    ],
    component: () => import('@/views/Landing/PrincingView.vue'),
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    meta: { requiresAuth: true },
    beforeEnter: validateParamsPokemon,
    // props: (router: RouteLocationNormalized) => {
    //   console.log('router?.params?.id', router?.params?.id)
    //   const id = router?.params?.id
    //   return isNaN(id) ? { id: 1 } : { id }
    // },
    component: () => import('../views/Landing/PokemonView.vue'),
  },
]

import { validateParamsPokemon } from '@/router/LandingRouter'
import type { RouteLocationNormalized } from 'vue-router'

describe('landingRouters', () => {
  test('parametro pokemon invalido, por defecto id 1 ', () => {
    const to: RouteLocationNormalized = {
      name: 'pokemon',
      params: {
        id: 'a',
      },
      matched: [],
      fullPath: '',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      meta: {
        requiresAuth: true,
      },
      path: '',
    }

    const res = validateParamsPokemon(to)
    expect(res).toEqual({ name: 'pokemon', params: { id: 1 } })
  })

  test('params id valido', () => {
    const to: RouteLocationNormalized = {
      name: 'pokemon',
      params: {
        id: '2',
      },
      matched: [],
      fullPath: '',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      meta: {
        requiresAuth: true,
      },
      path: '',
    }
    const res = validateParamsPokemon(to)
    expect(res).toBe(true)
  })
})

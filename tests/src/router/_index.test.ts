import { gaurds } from '@/router/_index'
import type { RouteLocationNormalized } from 'vue-router'

describe('gaurds routers', () => {
  const to: RouteLocationNormalized = {
    name: '',
    params: {},
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

  const from: RouteLocationNormalized = {
    name: undefined,
    params: {},
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    path: '',
    meta: {},
  }

  test('URL protec, Not autoritation, redirec login', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null) // moc de localStorage

    const res = await gaurds(to, from)

    expect(res).toEqual({
      name: 'login',
    })
  })

  test('URL protec sucefull access', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('true') // moc de localStorage
    const res = await gaurds(to, from)
    expect(res).toBe(true)
  })

  test('URL Not protec, sucefull acces ', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null) // moc de localStorage
    const res = await gaurds({ ...to, meta: { requiresAuth: false } }, from)
    expect(res).toBe(true)
  })
})

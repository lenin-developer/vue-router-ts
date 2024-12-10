import PokemonView from '@/views/Landing/PokemonView.vue'
import { mount, RouterLinkStub } from '@vue/test-utils'

const mockRoute = {
  params: {
    id: 1,
  },
}

const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  //...
}

vi.mock('vue-router', () => ({
  // your mocked methods
  useRoute: () => ({ ...mockRoute }),
  useRouter: () => ({ ...mockRouter }),
}))

// vi.mock(import('vue-router'), async (importOriginal) => {
//   const actual = await importOriginal()
//   return {
//     ...actual,
//     // your mocked methods
//     useRoute: () => ({ ...mockRoute }),
//     useRouter: () => ({ ...mockRouter }),
//   }
// })

describe('<PokemonView />', () => {
  const warpper = mount(PokemonView, {
    props: {
      // colocamos las props y su valor
    },
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter, // este no se esta ocupan en el dom
      },
      stubs: {
        // le decimos que el componente RouterLink se ecuentra de forma global
        RouterLink: RouterLinkStub,
      },
    },
  })

  test('render title', () => {
    const titleDom = warpper.find('h1')
    expect(titleDom.text()).toBe('pokemon')
  })

  test('render img src params', () => {
    const img = warpper.find('img')
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${mockRoute.params.id}.svg`
    expect(img.attributes('src')).toBe(src)
  })

  test('render btn', () => {
    const btn = warpper.find('button')
    expect(btn.exists()).toBe(true)
  })

  test('render <router-link />', () => {
    const RouterLinkComp = warpper.findComponent(RouterLinkStub)
    expect(RouterLinkComp.exists()).toBe(true)
  })

  test('<router-link /> to value', () => {
    const RouterLinkComp = warpper.findComponent(RouterLinkStub)
    const valueTo = { name: 'pokemon', params: { id: mockRoute.params.id + 1 } }
    expect(RouterLinkComp.props().to).toEqual(valueTo)
  })

  test('click Btn, next pokemon', async () => {
    const btn = warpper.find('button')
    await btn.trigger('click')

    expect(mockRouter.replace).toBeCalledWith({
      name: 'pokemon',
      params: { id: mockRoute?.params?.id + 1 },
    })
  })
})

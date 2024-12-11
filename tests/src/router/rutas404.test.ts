import App from '@/App.vue'
import router from '@/router/_index'
import { mount } from '@vue/test-utils'

describe('prueba de rutas', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })

  test('se debe de renderizar la pagina de 404 cuando la ruta no existe', async () => {
    await router.replace('/noexiste')
    await router.isReady()
    expect(wrapper.html()).toContain('404')
  })

  test('se debe de renderizar el compoente home cuando esta en la ruta raiz', async () => {
    await vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('true')
    await router.replace({ name: 'home' })
    await router.isReady()
    expect(wrapper.html()).toContain('home')
  })
})

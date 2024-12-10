import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import router from '@/router/_index'

describe(' App   <RouterView />', () => {
  test('render ', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    })

    //console.log('wrapper', wrapper.html())

    const routerView = wrapper.findComponent({ name: 'RouterView' })

    expect(routerView.exists()).toBe(true)
  })
})

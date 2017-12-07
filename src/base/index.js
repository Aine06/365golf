import Scroll from './packages/scroll/index'
import Countdown from './packages/countdown/index'
import Countup from './packages/countup/index'

const components = [
  Countdown,
  Countup,
  Scroll
]

export default {
  install(Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}

import Countdown from './src/conutdown.vue'

Countdown.install = function (Vue) {
  Vue.component(Countdown.name, Countdown)
}

export default Countdown

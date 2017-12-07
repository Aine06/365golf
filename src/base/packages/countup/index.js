import Countup from './src/countup.vue'

Countup.install = function (Vue) {
  Vue.component(Countup.name, Countup)
};

export default Countup

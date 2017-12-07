// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/scss/index.scss'
import { routerGoMixin } from './common/js/mixin'

Vue.config.productionTip = false
Vue.mixin(routerGoMixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

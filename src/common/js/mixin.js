/**
 * 切换页面title更新
 * @type {{methods: {setTitle: (function())}, mounted: (function())}}
 */
export const titleMixin = {
  methods: {
    setTitle () {
      document.title = this.$route.meta.title || ''
    }
  },
  mounted () {
    this.setTitle()
  }
}

/**
 * 路由跳转方法
 * @type {{methods: {routerGo: (function(*=))}}}
 */
export const routerGoMixin = {
  methods: {
    routerGo (path) {
      this.$router.push(path || '/')
    }
  }
}

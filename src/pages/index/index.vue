<template>
  <div class="hello">
    <h2>首页</h2>




    <nav-bottom :check=0 ></nav-bottom>
  </div>
</template>

<script>
  import navBottom from 'components/nav-bottom/nav-bottom'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {navBottom}
  }
</script>

<style lang="scss" scoped>
@import "../../common/scss/mixin";
h2{
  @include px2rem(font-size, 460px);
}
</style>

<template>
  <div id="app">
      <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    createWebsocket(){
      this.$store.dispatch('websocket/STAFF_WEBSOCKET')
    }
  },
  created(){
    this.createWebsocket()
  }
}
</script>

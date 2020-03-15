import Vue from 'vue'
import App from './App.vue'
// 导入路由配置
import router from './router'
// 导入 vuex 配置
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

import Vue from 'vue'
import App from './App.vue'
// 导入路由配置
import router from './router'
// 导入 vuex 配置
import store from './store'
// 移动端框架 vant 配置
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

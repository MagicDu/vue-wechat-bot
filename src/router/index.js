import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/* Layout */
import Layout from '@/layout'
// 设置常量路由
const constantRoutes = [{
    path: '/hello',
    component: () => import('@/components/HelloWorld')
},
{
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '',
      name: 'Dashboard',
      component: () => import('@/components/HelloWorld'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
]

// 使用 history  模式去除 # ，根据常量路由创建 路由
const createRouter = () => new Router({
    mode: 'history',
    routes: constantRoutes,
})

const router = createRouter()

export default router
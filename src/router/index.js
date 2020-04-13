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
  path: '/detail/:id',
  component: () => import('@/views/chat/chatdetail/chatdetail')
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
  {
    path: '/chats',
    component: Layout,
    redirect: '/chats',
    children: [{
      path: '',
      name: '微信',
      component: () => import('@/views/chat/chat'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/contacts',
    component: Layout,
    redirect: '/contacts',
    children: [{
      path: '',
      name: '联系人',
      component: () => import('@/views/contact/contact'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/discover',
    component: Layout,
    redirect: '/discover',
    children: [{
      path: '',
      name: '发现',
      component: () => import('@/views/discover/discover'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/me',
    component: Layout,
    redirect: '/me',
    children: [{
      path: '',
      name: '我的',
      component: () => import('@/views/me/me'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  }
]

// 使用 history  模式去除 # ，根据常量路由创建 路由
const createRouter = () => new Router({
    mode: 'history',
    routes: constantRoutes,
})

const router = createRouter()

export default router
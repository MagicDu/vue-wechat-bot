import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/* Layout */
import Layout from '@/layout'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

// 设置常量路由
const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/login')
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
      meta: { title: '首页', icon: 'dashboard',isleftarrow:false }
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
      meta: { title: '微信', icon: 'dashboard',isleftarrow:false }
    },
    {
      path: '/chats/detail/:id',
      name: '聊天',
      component: () => import('@/views/chat/chatdetail/chatdetail'),
      meta: { title: '聊天', icon: 'dashboard',isleftarrow:true }
    },
    ]
  },
  {
    path: '/contacts',
    component: Layout,
    redirect: '/contacts',
    children: [{
      path: '',
      name: '联系人',
      component: () => import('@/views/contact/contact'),
      meta: { title: '联系人', icon: 'dashboard',isleftarrow:false }
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
      meta: { title: '发现', icon: 'dashboard',isleftarrow:false }
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
      meta: { title: '我的', icon: 'dashboard',isleftarrow:false }
    }]
  }
]

// 使用 history  模式去除 # ，根据常量路由创建 路由
const createRouter = () => new Router({
    mode: 'history',
    routes: constantRoutes,
})

const router = createRouter()

// 添加异步路由accessRoutes 需要定义筛选 fliter
// 路由访问重定向

router.beforeEach(async (to, from, next) => {
	const hasToken = getToken()
	if (hasToken) {
    NProgress.start()
		if (to.path === '/login') {
			next({ path: '/chats' })
			NProgress.done()
		} else {
				next()
				NProgress.done()
		}
	} else  {
		if (whiteList.indexOf(to.path) !== -1 || (to.meta && to.meta.white)) {
			next()
		} else {
			next('/login')
			NProgress.done()
		}
	} 
})
export default router
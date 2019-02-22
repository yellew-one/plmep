import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      component: () => import('@/views/home/index'),
      name: 'home',
      meta: { title: 'm.homepage', icon: 'home', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/fMytasks',
    component: Layout,
    redirect: '/fMytasks',
    meta: { title: 'fengyangRoute.myTasks', icon: 'issue' },
    children: [{
      path: 'fMytasks',
      component: () => import('@/views/fengyang/Mytasks'),
      name: 'fMytasks',
      meta: { title: 'fengyangRoute.myTasks', icon: 'issue' }
    }]
  },
  {
    path: '/ypdq_task',
    component: Layout,
    redirect: '/ypdq_task',
    meta: { title: 'fengyangRoute.ypdq_task', icon: 'issue' },
    children: [{
      path: 'ypdq_task',
      component: () => import('@/views/fengyang/ypdq_task'),
      name: 'ypdq_task',
      meta: { title: 'fengyangRoute.ypdq_task', icon: 'issue' }
    }]
  },
  {
    path: '/funder_review',
    component: Layout,
    redirect: '/funder_review',
    meta: { title: 'fengyangRoute.under_review', icon: 'issue' },
    children: [{
      path: 'funder_review',
      component: () => import('@/views/fengyang/under_review'),
      name: 'funder_review',
      meta: { title: 'fengyangRoute.under_review', icon: 'issue' }
    }]
  },
  {
    path: '/fengyang_seacher',
    component: Layout,
    redirect: '/fengyang_seacher',
    meta: { title: 'fengyangRoute.fengyang_seacher', icon: 'issue' },
    children: [{
      path: 'fengyang_seacher',
      component: () => import('@/views/fengyang/fengyang_seacher'),
      name: 'fengyang_seacher',
      meta: { title: 'fengyangRoute.fengyang_seacher', icon: 'issue' }
    }]
  },
  {
    path: '/submitted',
    component: Layout,
    redirect: '/submitted',
    meta: { title: 'huanbaoRoute.Material_submitted', icon: 'dashboard' },
    children: [{
      path: 'submitted',
      component: () => import('@/views/huanbao/Material_submitted'),
      name: 'submitted',
      meta: { title: 'huanbaoRoute.Material_submitted', icon: 'issue', noCache: true }
    }]
  },
  {
    path: '/hMytasks',
    component: Layout,
    redirect: '/hMytasks',
    meta: { title: 'huanbaoRoute.third_report', icon: 'user' },
    children: [{
      path: 'hMytasks',
      component: () => import('@/views/huanbao/Mytasks'),
      name: 'hMytasks',
      meta: { title: 'huanbaoRoute.third_report', icon: 'user', noCache: true }
    }]
  },
  {
    path: '/search',
    component: Layout,
    redirect: '/search',
    meta: { title: 'huanbaoRoute.Material_Search', icon: 'dashboard' },
    children: [{
      path: 'search',
      component: () => import('@/views/huanbao/Material_Search'),
      name: 'search',
      meta: { title: 'huanbaoRoute.Material_Search', icon: 'dashboard', noCache: true }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

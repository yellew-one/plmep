import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/reset', component: () => import('@/views/login/reset'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/gongao', component: () => import('@/views/gongao'), hidden: true },
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
      meta: { title: 'fengyangRoute.myTasks', icon: 'dtj' }
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
      meta: { title: 'fengyangRoute.ypdq_task', icon: 'fydq3' }
    }]
  },
  // {
  //   path: '/funder_review',
  //   component: Layout,
  //   redirect: '/funder_review',
  //   meta: { title: 'fengyangRoute.under_review', icon: 'issue' },
  //   children: [{
  //     path: 'funder_review',
  //     component: () => import('@/views/fengyang/under_review'),
  //     name: 'funder_review',
  //     meta: { title: 'fengyangRoute.under_review', icon: 'issue' }
  //   }]
  // },
  {
    path: '/fengyang_seacher',
    component: Layout,
    redirect: '/fengyang_seacher',
    meta: { title: 'fengyangRoute.fengyang_seacher', icon: 'issue' },
    children: [{
      path: 'fengyang_seacher',
      component: () => import('@/views/fengyang/fengyang_seacher'),
      name: 'fengyang_seacher',
      meta: { title: 'fengyangRoute.fengyang_seacher', icon: 'fsearch' }
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
      meta: { title: 'huanbaoRoute.Material_submitted', icon: 'dtj', noCache: true }
    }]
  },
  {
    path: '/third',
    component: Layout,
    redirect: '/third',
    meta: { title: 'huanbaoRoute.third_report', icon: 'user' },
    children: [{
      path: 'third',
      component: () => import('@/views/huanbao/third'),
      name: 'third',
      meta: { title: 'huanbaoRoute.third_report', icon: 'fydq3', noCache: true }
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
      meta: { title: 'huanbaoRoute.Material_Search', icon: 'fsearch', noCache: true }
    }]
  },
  {
    path: '/detailTask',
    component: Layout,
    redirect: '/detailTask',
    meta: { title: 'huanbaoRoute.details', icon: 'dashboard' },
    hidden: true,
    children: [{
      path: '/detailTask/:oid/:state/:approvalType',
      component: () => import('@/views/huanbao/detailPage/detailTask'),
      name: 'detailTask',
      meta: { title: 'huanbaoRoute.details', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/detailthird',
    component: Layout,
    redirect: '/detailthird',
    meta: { title: 'huanbaoRoute.detailthird', icon: 'dashboard' },
    hidden: true,
    children: [{
      path: '/detailthird/:oid/:state',
      component: () => import('@/views/huanbao/detailPage/detailthird'),
      name: 'detailthird',
      meta: { title: 'huanbaoRoute.detailthird', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/fdetailTask', // /:oid/:state
    component: Layout,
    redirect: '/fdetailTask',
    meta: { title: 'fengyangRoute.details', icon: 'dashboard' },
    hidden: true,
    children: [{
      path: '/fdetailTask/:oid/:state/:stateName',
      component: () => import('@/views/fengyang/detailPage/detailTask'),
      name: 'fdetailTask',
      meta: { title: 'fengyangRoute.details', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/fdetailypdq',
    component: Layout,
    redirect: '/fdetailypdq',
    meta: { title: 'fengyangRoute.ypdqdetails', icon: 'dashboard' },
    hidden: true,
    children: [{
      path: '/fdetailypdq/:oid/:state',
      component: () => import('@/views/fengyang/detailPage/detailypdq'),
      name: 'fdetailypdq',
      meta: { title: 'fengyangRoute.ypdqdetails', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/createPcn',
    component: Layout,
    redirect: '/createPcn',
    meta: { title: 'pcn.title.createPcn', icon: 'issue' },
    children: [{
      path: 'createPcn',
      component: () => import('@/views/PCN/create_pcn'),
      name: 'createPcn',
      meta: { title: 'pcn.title.createPcn', icon: 'addpcn' }
    }]
  },
  {
    path: '/mypcn',
    component: Layout,
    redirect: '/mypcn',
    meta: { title: 'pcn.title.mypcn', icon: 'issue' },
    children: [{
      path: 'mypcn',
      component: () => import('@/views/PCN/my_pcn'),
      name: 'mypcn',
      meta: { title: 'pcn.title.mypcn', icon: 'mypcn' }
    }]
  },
  {
    path: '/editPcn',
    component: Layout,
    redirect: '/editPcn',
    meta: { title: 'pcn.title.rejectPcn', icon: 'issue' },
    children: [{
      path: 'editPcn',
      component: () => import('@/views/PCN/edit_pcn'),
      name: 'editPcn',
      meta: { title: 'pcn.title.rejectPcn', icon: 'rejectpcn' }
    }]
  },
  {
    path: '/download',
    component: Layout,
    redirect: '/download',
    meta: { title: 'OUTRESOURCE.tittle.out', icon: 'dtj' },
    children: [{
      path: 'download',
      component: () => import('@/views/resource/download'),
      name: 'download',
      meta: { title: 'OUTRESOURCE.tittle.out', icon: 'dtj' }
    }]
  },
  {
    path: '/outsearch',
    component: Layout,
    redirect: '/outsearch',
    meta: { title: 'OUTRESOURCE.tittle.search', icon: 'fsearch' },
    children: [{
      path: 'outsearch',
      component: () => import('@/views/resource/outsearch'),
      name: 'outsearch',
      meta: { title: 'OUTRESOURCE.tittle.search', icon: 'fsearch' }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

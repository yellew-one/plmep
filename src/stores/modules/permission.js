import { asyncRouterMap, constantRouterMap } from '@/router'
// import { getUserRouters } from '@/api/permission'
// import { removeToken } from '@/utils/auth'
/**
 *
 * @param {Array} userRouter 后台返回的用户权限json
 * @param {Array} allRouter 前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
function recursionRouter (userRouter = [], allRouter = []) {
  var realRoutes = []
  allRouter.forEach((v, i) => {
    if (v.meta) {
      userRouter.forEach((item, index) => {
        // if (item.title === '问题管理' && v.meta.title === '问题管理') {
        //   debugger
        // }
        if (item.title === v.meta.title) {
          if (item.children && item.children.length > 0) {
            v.children = recursionRouter(item.children, v.children)
          }
          realRoutes.push(v)
        }
      })
    } else {
      realRoutes.push(v)
    }
  })
  // debugger
  return realRoutes
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise((resolve, reject) => {
        const dynamicRouter = [{
          cfunid: '1000',
          fun_code: '1001',
          redirect: '/fMytasks',
          fun_level: 1,
          fun_name: '',
          // funurl: '/fengyang',
          title: 'fengyangRoute.myTasks',
          meta: { title: 'fengyangRoute.myTasks', icon: 'permission' },
          children: [
            {
              cfunid: '100010',
              title: 'fengyangRoute.myTasks',
              fun_level: 2,
              parent_id: '1000',
              name: 'fMytasks',
              funurl: '/fMytasks',
              meta: { title: 'fengyangRoute.myTasks', icon: 'permission' }
            }]
        }, {
          cfunid: '2002',
          fun_code: '2002',
          redirect: '/fengyang_seacher',
          fun_level: 1,
          fun_name: '',
          // funurl: '/fengyang',
          title: 'fengyangRoute.fengyang_seacher',
          meta: { title: 'fengyangRoute.fengyang_seacher', icon: 'permission' },
          children: [
            {
              cfunid: '200010',
              title: 'fengyangRoute.fengyang_seacher',
              fun_level: 2,
              parent_id: '2002',
              name: 'fengyang_seacher',
              funurl: '/fengyang_seacher',
              meta: { title: 'fengyangRoute.fengyang_seacher', icon: 'permission' }
            }]
        }, {
          cfunid: '2003',
          fun_code: '2003',
          redirect: '/ypdq_task',
          fun_level: 1,
          fun_name: '',
          // funurl: '/fengyang',
          title: 'fengyangRoute.ypdq_task',
          meta: { title: 'fengyangRoute.ypdq_task', icon: 'permission' },
          children: [
            {
              cfunid: '200010',
              title: 'fengyangRoute.ypdq_task',
              fun_level: 2,
              parent_id: '2003',
              name: 'ypdq_task',
              funurl: '/ypdq_task',
              meta: { title: 'fengyangRoute.ypdq_task', icon: 'permission' }
            }]
        }, {
          cfunid: '2004',
          fun_code: '2005',
          redirect: '/funder_review',
          fun_level: 1,
          fun_name: '',
          // funurl: '/fengyang',
          title: 'fengyangRoute.under_review',
          meta: { title: 'fengyangRoute.under_review', icon: 'permission' },
          children: [
            {
              cfunid: '200010',
              title: 'fengyangRoute.under_review',
              fun_level: 2,
              parent_id: '2005',
              name: 'funder_review',
              funurl: '/funder_review',
              meta: { title: 'fengyangRoute.under_review', icon: 'permission' }
            }]
        }, {
          redirect: '/fdetailTask',
          title: 'fengyangRoute.details',
          meta: { title: 'fengyangRoute.details', icon: 'permission' },
          children: [
            {
              title: 'fengyangRoute.details',
              name: 'fdetailTask',
              meta: { title: 'fengyangRoute.details', icon: 'permission' }
            }]
        }, {
          redirect: '/fdetailypdq',
          title: 'fengyangRoute.ypdqdetails',
          meta: { title: 'fengyangRoute.ypdqdetails', icon: 'permission' },
          children: [
            {
              title: 'fengyangRoute.ypdqdetails',
              name: 'fdetailypdq',
              meta: { title: 'fengyangRoute.ypdqdetails', icon: 'permission' }
            }]
        }]
        const dynamicRouter2 = [{
          redirect: '/third',
          title: 'huanbaoRoute.third_report',
          meta: { title: 'huanbaoRoute.third_report', icon: 'permission' },
          children: [
            {
              title: 'huanbaoRoute.third_report',
              name: 'third',
              meta: { title: 'huanbaoRoute.third_report', icon: 'permission' }
            }]
        },
        {
          redirect: '/submitted',
          title: 'huanbaoRoute.Material_submitted',
          meta: { title: 'huanbaoRoute.Material_submitted', icon: 'permission' },
          children: [
            {
              title: 'huanbaoRoute.Material_submitted',
              name: 'submitted',
              meta: { title: 'huanbaoRoute.Material_submitted', icon: 'permission' }
            }]
        },
        {
          redirect: '/search',
          title: 'huanbaoRoute.Material_Search',
          meta: { title: 'huanbaoRoute.Material_Search', icon: 'permission' },
          children: [
            {
              title: 'huanbaoRoute.Material_Search',
              name: 'search',
              meta: { title: 'huanbaoRoute.Material_Search', icon: 'permission' }
            }]
        },
        {
          redirect: '/detailTask',
          title: 'huanbaoRoute.details',
          meta: { title: 'huanbaoRoute.details', icon: 'permission' },
          children: [
            {
              title: 'huanbaoRoute.details',
              name: 'detailTask',
              meta: { title: 'huanbaoRoute.details', icon: 'permission' }
            }]
        },
        {
          redirect: '/detailthird',
          title: 'huanbaoRoute.detailthird',
          meta: { title: 'huanbaoRoute.detailthird', icon: 'permission' },
          children: [
            {
              title: 'huanbaoRoute.detailthird',
              name: 'detailthird',
              meta: { title: 'huanbaoRoute.detailthird', icon: 'permission' }
            }]
        }]
        var accessedRouters
        if (data.type === '封样') {
          accessedRouters = recursionRouter(dynamicRouter, asyncRouterMap)
        } else {
          accessedRouters = recursionRouter(dynamicRouter2, asyncRouterMap)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
        // }).catch(error => {
        //   console.log(error)
        //   removeToken()
        //   reject(error)
        // })
      })
    }
  }
}

export default permission

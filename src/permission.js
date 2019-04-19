import router from './router'
import store from './stores'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getUserInfo } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

const whiteList = ['/login', '/404', '/reset']// no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  // if (store.getters.fengyangTaskNum === -1) {
  //   store.dispatch('getNum', store.commit)
  // }
  if (getUserInfo() && getUserInfo() !== 'false') { // determine if there has tokena
    if (!store.getters.permission_routers) {
      store.dispatch('GenerateRoutes', JSON.parse(getUserInfo()))
      router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      console.log('退出登录..')
      // next('/login') // 否则全部重定向到登录页
      to.params.name = to.name
      next({
        path: '/login',
        query: to.params // 把要跳转的地址作为参数传到下一步
      })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

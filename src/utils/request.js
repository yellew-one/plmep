import axios from 'axios'
import { Message } from 'element-ui'
import store from '../stores'
// 创建axios实例
var arr = window.location.host.toString().split(':')
const service = axios.create({
  // baseURL: process.env.API_BASEURL, // ap  i的base_url
  // 本地测试
  // baseURL: 'http://plmtest.longcheer.com',
  // baseURL: 'http://172.16.9.159:80',
  // 170 测试
  baseURL: 'http://' + arr[0] + ':8082',
  // 170  正式
  // baseURL: 'http://' + arr[0] + ':8084',
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // config.headers.authorization = 'LAP ' + getToken()
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
  // const res = response.data
  // if (res.code !== 000) {
  //   Message({
  //     message: res.message,
  //     type: 'error',
  //     duration: 5 * 1000
  //   })
  //
  //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //       confirmButtonText: '重新登录',
  //       cancelButtonText: '取消',
  //       type: 'warning'
  //     }).then(() => {
  //       store.dispatch('FedLogOut').then(() => {
  //         location.reload()// 为了重新实例化vue-router对象 避免bug
  //       })
  //     })
  //   }
  //   return Promise.reject('error')
  // } else {
  //   return response.data
  // }
  function (response) {
    store.commit('SET_LOADING', false)
    return response
  },
  function (error) {
    console.log('a', arguments)
    // console.log('error', error)
    store.commit('SET_LOADING', false)
    if (error.message.includes('timeout')) {
      Message({
        message: error + '\n\r接口地址:\n\r' + arguments[0].config.url + '\n\r参数:\n\r' + arguments[0].config.data,
        type: 'error',
        duration: 10 * 1000
      })
    } else {
      Message({
        message: error + '\n\r接口地址:\n\r' + arguments[0].config.url + '\n\r参数:\n\r' + arguments[0].config.data,
        type: 'error',
        duration: 7 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service

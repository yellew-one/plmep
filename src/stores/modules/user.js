/**
 * Created by heganxin on 2019/2/18.
 */
import { login } from '@/api/login'
import Cookies from 'js-cookie'

const user = {
  state: {
    userInfo: localStorage.getItem('userInfo') || {},
    token: JSON.parse(localStorage.getItem('token')) || '',
    islogin: localStorage.getItem('userInfo') || false
  },
  mutations: {
    SET_ISLOGIN: (state, islogin) => {
      localStorage.setItem('islogin', JSON.stringify(islogin))
      state.islogin = islogin
    },
    SET_USERINFO: (state, userInfo) => {
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      Cookies.set('userInfo', JSON.stringify(userInfo))
      state.userInfo = userInfo
    },
    SET_TOKEN: (state, token) => {
      localStorage.setItem('token', JSON.stringify(token))
      state.token = token
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const name = userInfo.name.trim()
      const password = userInfo.password.trim()
      return new Promise((resolve, reject) => {
        login(name, password).then(response => {
          const data = response.data
          commit('SET_USERINFO', data.name)
          commit('SET_TOKEN', data.token)
          // setName(data.name)
          resolve(response)
        }).catch(error => { reject(error) })
      })
    },
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_USERINFO', false)
        commit('SET_TOKEN', '')
        // removeName()
        // removeToken()
      })
    },
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        // setToken(false)
        commit('SET_TOKEN', false)
        resolve()
      })
    }
  }
}
export default user

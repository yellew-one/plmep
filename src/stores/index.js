import Vue from 'vue'
import 'babel-polyfill'
import Vuex from 'vuex'
import user from './modules/user'
import app from './modules/app'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // filePath: 'http://172.16.9.169:8080'
    filePath: 'http://plm.hedada.com:8083'
    // filePath: 'http://101.230.211.165:8083'
  },
  modules: {
    user,
    tagsView,
    permission,
    app
  },
  getters
})

export default store

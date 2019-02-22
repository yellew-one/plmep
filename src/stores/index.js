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
  modules: {
    user,
    tagsView,
    permission,
    app
  },
  getters
})

export default store

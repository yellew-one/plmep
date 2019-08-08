import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    huanbaoTaskNum: -1,
    fengyangTaskNum: -1,
    fengyangdaoqiNum: -1,
    huanbaoNum: '',
    device: 'desktop',
    guojihua: sessionStorage.getItem('guojihua') === null ? 'zh' : sessionStorage.getItem('guojihua') || 'zh',
    loading: false,
    baseUrl: '',
    filesPath: '',
    websiteType: '',
    ifpcn: false
  },
  mutations: {
    SET_IFPCN: (state, ifpcn) => {
      state.ifpcn = ifpcn
    },
    SET_BASEURL: (state, baseUrl) => {
      state.baseUrl = baseUrl
    },
    SET_FILESPATH: (state, filesPath) => {
      state.filesPath = filesPath
    },
    SET_WEBSITETYPE: (state, websiteType) => {
      state.websiteType = websiteType
    },
    SET_FENGYANGDAOQINUM: (state, fengyangdaoqiNum) => {
      state.fengyangdaoqiNum = fengyangdaoqiNum
    },
    SET_FENGYANGTASKNUM: (state, fengyangTaskNum) => {
      state.fengyangTaskNum = fengyangTaskNum
    },
    SET_HUANBAOTASKNUM: (state, huanbaoTaskNum) => {
      state.huanbaoTaskNum = huanbaoTaskNum
    },
    SET_HUANBAONUM: (state, huanbaoNum) => {
      state.huanbaoNum = huanbaoNum
    },
    SET_LOADING: (state, loading) => {
      state.loading = loading
    },
    SET_GUOJIHUA: (state, guojihua) => {
      sessionStorage.setItem('guojihua', guojihua)
      state.guojihua = guojihua
    },
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    ToggleSideBar: ({commit}) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar ({commit}, {withoutAnimation}) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice ({commit}, device) {
      commit('TOGGLE_DEVICE', device)
    },
    getNum ({ commit }) {
      /* showSealedSampleTasks().then(r => {
        commit('SET_FENGYANGTASKNUM', r.data.length)
      })
      expiredSealedSampleTasks().then(r => {
        commit('SET_FENGYANGDAOQINUM', r.data.length)
      })
      showEnvProtectionTasks().then(r => {
        commit('SET_HUANBAOTASKNUM', r.data.length)
      }) */
    }
  }
}

export default app

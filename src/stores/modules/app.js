import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    huanbaoTaskNum: 0,
    device: 'desktop',
    guojihua: localStorage.getItem('guojihua') || 'zh',
    loading: false
  },
  mutations: {
    SET_HUANBAOTASKNUM: (state, huanbaoTaskNum) => {
      state.huanbaoTaskNum = huanbaoTaskNum
    },
    SET_LOADING: (state, loading) => {
      state.loading = loading
    },
    SET_GUOJIHUA: (state, guojihua) => {
      localStorage.setItem('guojihua', guojihua)
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
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar ({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}

export default app
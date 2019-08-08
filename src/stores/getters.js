const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  loading: state => state.app.loading,
  guojihua: state => state.app.guojihua,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  avatar: state => state.user.avatar,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  islogin: state => state.user.islogin,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  visitedviews: state => state.tagsview.visitedviews,
  huanbaoTaskNum: state => state.app.huanbaoTaskNum,
  fengyangTaskNum: state => state.app.fengyangTaskNum,
  fengyangdaoqiNum: state => state.app.fengyangdaoqiNum,
  huanbaoNum: state => state.app.huanbaoNum,
  baseUrl: state => state.app.baseUrl,
  filesPath: state => state.app.filesPath,
  websiteType: state => state.app.websiteType,
  IFPCN: state => state.app.ifpcn
}
export default getters

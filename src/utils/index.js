/**
 * Created by yaoyuan on 2019/3/6.
 */
export function initPage (obj, service) {
  obj.counts = {pageSize: 10, nowPage: 1, nextPage: 2, lastPage: 4, totalCount: 0}
  obj.serchItems = {}
  // 查询指定页
  obj.searchCurrent = function (nowPage) { // 查询指定页
    obj.counts.nowPage = nowPage
    obj.searchN()
  }
  // 查询公共方法 查询第N页
  obj.searchN = function search () {
    console.log(obj)
    service(obj).then(r => {
      obj.dataList = r.data.result
      obj.counts.totalCount = r.data.totalCount
      obj.counts.lastPage = r.data.maxPage
      return r
    })
  }
}

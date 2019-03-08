/**
 * Created by yaoyuan on 2019/3/6.
 */
export function initPage (obj, service) {
  obj.counts = {pageSize: 0, nowPage: 1, nextPage: 0, lastPage: 0}
  // 查询指定页
  obj.searchCurrent = function (nowPage) { // 查询指定页
    obj.counts.nowPage = nowPage
    obj.searchN()
  }
  // 查询公共方法 查询第N页
  obj.searchN = function search () {
    service(obj).then(r => {
      alert(r)
      return r
    })
  }
}

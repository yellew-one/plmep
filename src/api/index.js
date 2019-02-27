/**
 * Created by heganxin on 2019/2/15.
 */
import request from '@/utils/request'
import Qs from 'qs'
import store from '../stores'

export function expiredSealedSampleTasks () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'expiredSealedSampleTasks',
      username: store.getters.userInfo.username
    }
  })
}
export function showSealedSampleTasks () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'showSealedSampleTasks',
      username: store.getters.userInfo.username
    }
  })
}
export function userInfo () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'userInfo',
      username: store.getters.userInfo.username
    }
  })
}
export function updateUser (userInfo) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'updateUser',
      username: store.getters.userInfo.username,
      userJson: JSON.stringify(userInfo)
    }
  })
}
// 获取封样详细信息
export function showTaskDetails (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'showTaskDetails',
      username: store.getters.userInfo.username,
      oid: oid
    }
  })
}
// 编辑封样任务详细信息接口
export function editSealedSampleDocInfo (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editSealedSampleDocInfo',
      username: store.getters.userInfo.username,
      oid: oid
    }
  })
}
// 物料类别下拉框调用
export function lqClassCategory () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'lq_class_category',
      internalName: 'lq_class_category'
    }
  })
}
// 供应商等级下拉框调用
export function lqSupplierRank () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'lq_supplier_rank',
      internalName: 'lq_supplier_rank'
    }
  })
}

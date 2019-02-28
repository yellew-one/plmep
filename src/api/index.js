/**
 * Created by heganxin on 2019/2/15.
 */
import request from '@/utils/request'
import Qs from 'qs'
import store from '../stores'
// 查看到期任务
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
// 封样待提交任务
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
// 获取用户信息
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
// 获取环保待提交任务
export function showEnvProtectionTasks () {
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
      operation: 'showEnvProtectionTasks',
      username: store.getters.userInfo.username
    }
  })
}
// 第三方到期任务
export function expiredEnvProtectionTasks () {
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
      operation: 'expiredEnvProtectionTasks',
      username: store.getters.userInfo.username
    }
  })
}
// 环保搜索
export function searchEnvprotection (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchEnvprotection.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'searchEnvprotection',
      searchDateFrom: e.searchDateFrom,
      searchDateTo: e.searchDateTo,
      materialCode: e.materialCode,
      materialName: e.materialName,
      exemptionForm: e.exemptionForm,
      status: e.status,
      casno: e.casno
    }
  })
}
// 环保任务详细
export function showEnvprotectionTask (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'showEnvprotectionTask',
      oid: e
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
// 编辑封样详细信息后保存接口
export function editSealedDocInfo (data) {
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
      jsonData: JSON.stringify(data),
      oid: data.oid
    }
  })
}
// getEnvpState 获取物料环保搜索页面查询条件中物料环保状态下拉框的值
export function getEnvpState () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchEnvprotection.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getEnvpState'
    }
  })
}
// selectRoHSExemption 获取RoHS豁免条款
export function selectRoHSExemption (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchEnvprotection.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectRoHSExemption',
      RoHSNumber: e.RoHSNumber,
      RoHSType: e.RoHSType,
      startDate: e.startDate,
      endDate: e.endDate,
      RoHSDescription: e.RoHSDescription
    }
  })
}
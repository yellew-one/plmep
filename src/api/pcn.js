/**
 * Created by heganxin on 2019/3/26.
 */
import request from '@/utils/request'
import Qs from 'qs'
import store from '../stores'

export function createChangeRequest (jsonData) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/supplierECR.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'createChangeRequest',
      jsonData: jsonData
    }
  })
}
export function resourceEngineer () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/supplierECR.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'resourceEngineer'
    }
  })
}
export function createEcr (jsonData) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/supplierECR.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'createEcr',
      jsonData: jsonData
    }
  })
}
export function ecrType () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/supplierECR.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'ecrType'
    }
  })
}
export function reworkEcrList () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/supplierECR.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'reworkEcrList',
      supplierCode: store.getters.userInfo.username
    }
  })
}
export function searchEcr (data) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/supplierECR.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'searchEcr',
      supplierNumber: store.getters.userInfo.username,
      ecrType: data.serchItems.ecrType,
      name: data.serchItems.name,
      LQ_PROJECT: data.serchItems.LQ_PROJECT,
      sourceEngineer: data.serchItems.sourceEngineer,
      state: data.serchItems.state,
      nowPage: data.serchItems.nowPage
    }
  })
}
export function reworkEcrInfo (ecrOid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/supplierECR.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'reworkEcrInfo',
      ecrOid: ecrOid
    }
  })
}
export function editEcr (jsonData) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/supplierECR.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editEcr',
      jsonData: jsonData
    }
  })
}

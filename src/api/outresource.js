/**
 * Created by yaoyuan on 2019/5/7.
 */
import request from '@/utils/request'
import Qs from 'qs'
import store from '../stores'

/**
 * 外发资料下载列表
 */
export function listDownloadTask () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/dataOut/dataOutDownload.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'listDownloadTask',
      username: store.getters.userInfo.username
    }
  })
}
/**
 * 外发资料包下载
 * @param oid
 */
export function downloadZip (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/dataOut/dataOutDownload.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'downloadZip',
      oid: oid,
      username: store.getters.userInfo.username
    }
  })
}
/**
 * 外发资料搜索
 * @param temp
 */
export function searchPackage (temp, counts) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/dataOut/dataOutDownload.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'searchPackage',
      username: store.getters.userInfo.username,
      startTime: temp.searchDateFrom,
      endTime: temp.searchDateTo,
      name: temp.name,
      number: temp.project,
      pageNum: counts.nowPage,
      pageSize: counts.pageCount
    }
  })
}
/**
 * 接口人信息
 */
export function receiverInfo () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/dataOut/dataOutDownload.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'receiverInfo',
      username: store.getters.userInfo.username
    }
  })
}

/**
 * 接口人信息编辑
 * @param temp
 */
export function saveReceiverInfo (temp) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/dataOut/dataOutDownload.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'saveReceiverInfo',
      username: store.getters.userInfo.username,
      password: temp.password,
      fullname: temp.fullname,
      mail: temp.mail,
      mobile: temp.mobile,
      tel: temp.tel,
      unit: temp.unit,
      group: temp.group
    }
  })
}

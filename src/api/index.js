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

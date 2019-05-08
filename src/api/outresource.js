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

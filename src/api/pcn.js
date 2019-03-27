/**
 * Created by heganxin on 2019/3/26.
 */
import request from '@/utils/request'
import Qs from 'qs'
export function createChangeRequest (jsonData) {
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
      operation: 'createChangeRequest',
      jsonData: jsonData
    }
  })
}

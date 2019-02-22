/**
 * Created by heganxin on 2019/2/15.
 */
import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

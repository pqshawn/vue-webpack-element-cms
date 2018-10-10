import request from '@/utils/request'

export function getInfo(token) {
  return request({
    url: '/app/v1/api/user/getinfo',
    method: 'post',
    // 不要拼接在url:QUERY_STRING，要放进自定义header
    // params: { token }
  })
}


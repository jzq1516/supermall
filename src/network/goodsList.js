import {request} from './request'

export function getGoodsList(cid, pagenum) {
  return request({
    url: '/goods/search',
    params: {
      cid,
      pagenum
    }
  })
}
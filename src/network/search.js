import { request } from './request'

export function getSearchData(query) {
  return request({
    url: '/goods/qsearch',
    params: {
      query
    }
  })
}
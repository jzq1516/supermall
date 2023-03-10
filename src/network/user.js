import { requestUser } from './request'

export const login = data => {
  return requestUser({
    methods: 'POST',
    url: 'v1_0/authorizations',
    data
  })
}

export const sendSms = mobile => {
  return requestUser({
    methods: 'GET',
    url: `v1_0/sms/codes/${mobile}`
  })
}
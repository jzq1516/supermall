import axios from "axios"

export function request(config) {
	// 1.创建axios实例
	const instance = axios.create({
		baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1'
	})

	// 2.axios拦截器
	// 2.1请求拦截器
	instance.interceptors.request.use(config=>{
		return config
	})

	// 2.2响应拦截
	instance.interceptors.response.use(res=>{
		return res.data
	})

	// 3.发送请求
	return instance(config)

}

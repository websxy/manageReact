import { message } from 'antd';
import axios from 'axios';
import router from 'umi/router';
import qs from 'qs';
import { getCookie } from './cookie'


axios.defaults.withCredentials = true;


/* axios实例 */
const service = axios.create({
	baseURL: 'http://localhost:9080/dam_manage',
	timeout: 600000,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'crsf_token': getCookie('crsf_token'),
	}
});

/* axios请求拦截 */
service.interceptors.request.use(
	config => {
		if(config.method === 'post'){
			config.data = qs.stringify(config.data);
		}
		return config;
	}, (err) => {
		return Promise.reject(err);
});

/* axios响应拦截 */
service.interceptors.response.use(
	response => {
		return response.data;
	}, (error) => {
		if (error.response && error.response.status == 500) {
			message.error('程序错误，请联系管理员');
		}else if(error.response && error.response.status == 404){
			message.error('接口路径不正确，请联系管理员');
		}else if(error.toString().includes('timeout')){
			message.error('请求超时，请联系管理员');
		}else if(error.toString().includes('Network Error')){
			message.error('服务器无响应，请联系管理员');
		}
		return Promise.reject(error);
});

export default service;
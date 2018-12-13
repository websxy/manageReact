import request from '@/utils/request';

/* 登陆 */
export async function login(params) {
    return request('/dam/login.do', {
        method: 'POST',
        data: {...params}
    });
}

/* license认证 */
export async function licenseVerify() {
    return request('/license/verify.do')
}
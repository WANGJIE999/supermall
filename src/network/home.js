// home 数据请求
import { request } from './request'

export function gethomemultidata() {

    return request({
        URL: '/Admin/Login',
        method: 'post'
    })


}

// home 数据请求
import { request } from './request'

export function gethomemultidata() {

    return request({
        url: 'login',
        method: 'post'
    })


}

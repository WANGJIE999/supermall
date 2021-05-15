import axios from 'axios'
export function request(config) {
    // 创建实例
    const instance = axios.create({
        // 请求根路径
        baseURL: 'http://127.0.0.1:8888/api/private/v1',
        timeout: 5000
    })

    // 2.axios拦截器
    // 2.1请求拦截的作用
    instance.interceptors.request.use(config => {
        // 1.config中的一些信息不符合服务器的要求
        // 2.比如每次向服务器请求时，界面出现一个加载动画
        // 3.某些网络请求(比如登录（token),必须携带一些特殊信息
        return config
    }, err => {
        console.log(err);
    })
    // 2.2响应拦截的作用
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })

    // 实例本身就是Promise
    return instance(config)
}
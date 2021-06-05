import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui 组件库
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ViewUI);
Vue.use(ElementUI)
// viewui 组件库
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// vant-ui 移动端
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import 'assets/fonts/iconfont.css'

Vue.config.productionTip = false


import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token")
  // 1.config中的一些信息不符合服务器的要求
  // 2.比如每次向服务器请求时，界面出现一个加载动画
  // 3.某些网络请求(比如登录（token),必须携带一些特殊信息
  return config
}, err => {
  console.log(err);
})




import Mock from './mock/index'
Mock.init()
Vue.prototype.$ajax = axios







new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

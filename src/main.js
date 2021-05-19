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




new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

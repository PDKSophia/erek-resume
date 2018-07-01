// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import tool from '@/lib/tool'
import api from '@/api'
Object.defineProperty(Vue.prototype, '$api', {value: api})
Object.defineProperty(Vue.prototype, '$tool', {value: tool})
Vue.config.productionTip = false
// 引入iView组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// 引入Vuex状态管理
import store from './store'

// 引入PDF生成函数
import htmlToPdf from './task/htmlToPdf'
Vue.use(htmlToPdf)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')

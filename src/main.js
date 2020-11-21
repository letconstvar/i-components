import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局注册icon组件
import Icon from '@/components/icon/index'
Vue.use(Icon);

import Message from '@/components/message/message.js'
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

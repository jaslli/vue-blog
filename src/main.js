import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import store from './store/index.js'
import 'animate.css';
import Message from '@/components/Message'
import VueShowdown from 'vue-showdown'

// 全局提示组件
Vue.use(Message)

// VueShowdown转换工具
Vue.use(VueShowdown, {
    // 设置 showdown 默认 flavor
    flavor: 'github',
    // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
    options: {
        emoji: false,
    },
})


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

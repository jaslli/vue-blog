// 作为 Vue 插件引入
import Vue from 'vue'
import VueShowdown from 'vue-showdown'

// Vue.use() 的第二个参数是可选的
Vue.use(VueShowdown, {
    // 设置 showdown 默认 flavor
    flavor: 'github',
    // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
    options: {
        emoji: false,
    },
})

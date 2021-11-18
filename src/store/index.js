import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'

Vue.use(Vuex)

// 准备state-用于存储数据
const state = {
    // 博主名称
    name: '',
    // 头像
    Avatar: '',
    // 博主简介
    desc: '',
    // 公告
    notice: '',

    // banner图
    HomeBanner: '',
    ArchivesBanner: '',
    CategoriesBanner: '',
    LinkBanner: '',
    AboutBanner: ''
}

// 准备mutations-用于操作数据（state）
const mutations = {
    // 设置数据，必要的存入浏览器，因为刷新会导致state丢失

}

// 准备actions-用于响应组件的动作
const actions = {}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
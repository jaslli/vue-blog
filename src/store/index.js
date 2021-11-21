import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import { getInfo } from '@/api/info'

Vue.use(Vuex)

// 准备state-用于存储数据
const state = {
    // 博客标题
    title: '',
    // 博客副标题
    subtitle: '',
    // 博主名称
    name: '',
    // 头像
    avatar: '',
    // 博主简介
    description: '',
    // 公告
    notice: '',
    // 小姐姐展示图
    lovely: '',
    // icp备案号
    icp: '',
    // 博客创建时间
    createTime: '',
    // banner图
    homeBanner: '',
    archivesBanner: '',
    categoriesBanner: '',
    linkBanner: '',
    aboutBanner: ''
}

// 准备mutations-用于操作数据（state）
const mutations = {
    // 设置数据，必要的存入浏览器，因为刷新会导致state丢失
    SET_TITLE: (state, title) => state.title = title,
    SET_SUBTITLE: (state, subtitle) => state.subtitle = subtitle,
    SET_NAME: (state, name) => state.name = name,
    SET_AVATAR: (state, avatar) => state.avatar = avatar,
    SET_DESCRIPTION: (state, description) => state.description = description,
    SET_NOTICE: (state, notice) => state.notice = notice,
    SET_LOVELY: (state, lovely) => state.lovely = lovely,
    SET_ICP: (state, icp) => state.icp = icp,
    SET_CREATE_TIME: (state, createTime) => state.createTime = createTime,
    SET_HOME_BANNER: (state, homeBanner) => state.homeBanner = homeBanner,
    SET_ARCHIVES_BANNER: (state, archivesBanner) => state.archivesBanner = archivesBanner,
    SET_CATEGORIES_BANNER: (state, categoriesBanner) => state.categoriesBanner = categoriesBanner,
    SET_LINK_BANNER: (state, linkBanner) => state.linkBanner = linkBanner,
    SET_ABOUT_BANNER: (state, aboutBanner) => state.aboutBanner = aboutBanner,
}

// 准备actions-用于响应组件的动作
const actions = {
    // 获取博客信息
    getInfo({ commit }) {
        return new Promise(() => {
            getInfo().then(response => {
                const { data } = response;
                commit('SET_TITLE',data.title)
                commit('SET_SUBTITLE',data.subtitle)
                commit('SET_NAME',data.name)
                commit('SET_AVATAR',data.avatar)
                commit('SET_DESCRIPTION',data.description)
                commit('SET_NOTICE',data.notice)
                commit('SET_LOVELY',data.lovely)
                commit('SET_ICP',data.icp)
                commit('SET_CREATE_TIME',data.createTime)
                commit('SET_HOME_BANNER',data.homeBanner)
                commit('SET_ARCHIVES_BANNER',data.archivesBanner)
                commit('SET_CATEGORIES_BANNER',data.categoriesBanner)
                commit('SET_LINK_BANNER',data.linkBanner)
                commit('SET_ABOUT_BANNER',data.aboutBanner)
            })
        }).catch(error => {
            console.log(error)
        })
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
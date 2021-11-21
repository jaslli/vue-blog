const getters = {
    name: state => {
        if (state.name) {
            return state.name
        } else {
            return 'Yw'
        }
    },
    Avatar: state => {
        if (state.avatar) {
            return state.Avatar
        } else {
            return 'https://img.yww52.com/avatar.jpg'
        }
    },
    description: state => {
        if (state.description) {
            return state.description
        } else {
            return '永远相信美好的事情即将发生'
        }
    },
    notice: state => {
        if (state.notice) {
            return state.notice
        } else {
            return '欢迎来到我的博客!'
        }
    },
    homeBanner: state => {
        if (state.homeBanner) {
            return state.homeBanner
        } else {
            return 'https://img.yww52.com/wallpaper.jpg'
        }
    },
    ArchivesBanner: state => {
        if (state.ArchivesBanner) {
            return state.ArchivesBanner
        } else {
            return 'https://img.yww52.com/archives_top_img.jpg'
        }
    },
    categoriesBanner: state => {
        if (state.categoriesBanner) {
            return state.categoriesBanner
        } else {
            return 'https://img.yww52.com/categories_top_img.jpg'
        }
    },
    linkBanner: state => {
        if (state.linkBanner) {
            return state.linkBanner
        } else {
            return 'https://img.yww52.com/link_top_img.jpg'
        }
    },
    aboutBanner: state => {
        if (state.aboutBanner) {
            return state.aboutBanner
        } else {
            return 'https://img.yww52.com/about_top_img.jpg'
        }
    },
    createTime: state => {
        if (state.createTime) {
            return state.createTime
        } else {
            return 'https://img.yww52.com/about_top_img.jpg'
        }
    }
}
export default getters
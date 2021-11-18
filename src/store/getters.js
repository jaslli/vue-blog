const getters = {
    name: state => {
        if (state.name) {
            return state.name
        } else {
            return 'Yw'
        }
    },
    Avatar: state => {
        if (state.Avatar) {
            return state.Avatar
        } else {
            return 'https://img.yww52.com/avatar.jpg'
        }
    },
    desc: state => {
        if (state.desc) {
            return state.desc
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
    HomeBanner: state => {
        if (state.HomeBanner) {
            return state.HomeBanner
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
    CategoriesBanner: state => {
        if (state.CategoriesBanner) {
            return state.CategoriesBanner
        } else {
            return 'https://img.yww52.com/categories_top_img.jpg'
        }
    },
    LinkBanner: state => {
        if (state.LinkBanner) {
            return state.LinkBanner
        } else {
            return 'https://img.yww52.com/link_top_img.jpg'
        }
    },
    AboutBanner: state => {
        if (state.AboutBanner) {
            return state.AboutBanner
        } else {
            return 'https://img.yww52.com/about_top_img.jpg'
        }
    },
}
export default getters
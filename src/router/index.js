import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
        title: '整体布局',
        path: '/',
        component: Layout,
        children: [
            {
                title: '首页',
                path: '/',
                component: resolve => require(['@/view/Home'], resolve),
            },
            {
                title: '文章页',
                path: '/article/:articleId',
                component: resolve => require(['@/view/Article'], resolve),
            },
            {
                title: '归档',
                path: '/archives',
                component: resolve => require(['@/view/Archives'], resolve),
            },
            {
                title: '分类',
                path: '/categories',
                component: resolve => require(['@/view/Categories/index'], resolve),
            },
            {
                title: '文章页',
                path: '/category/:categoryId',
                component: resolve => require(['@/view/Categories/CategoryList'], resolve),
            },
            {
                title: '友链',
                path: '/link',
                component: resolve => require(['@/view/Link'], resolve),
            },
            {
                title: '关于',
                path: '/about',
                component: resolve => require(['@/view/About'], resolve),
            }
        ],
    },
    {
        title: 'text',
        path: '/text',
        component: resolve => require(['@/components/Pagination'], resolve),
    }
]
});
import NProgress from "@/utils/nprogress";
import {
    Router,
    createRouter, createWebHashHistory
} from "vue-router";

// 路由数组
const routes = [];

/**
 * 自动导入静态路由
 */
const modules: Record<string, any> = import.meta.glob(
    ["./modules/**/*.ts"],
    {
        eager: true
    }
);
Object.keys(modules).forEach(key => {
    routes.push(modules[key].default);
});


/** 创建路由实例 */
export const router: Router = createRouter({
    // https://router.vuejs.org/zh/guide/essentials/history-mode.html
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes: routes,
    strict: true,
    scrollBehavior(to, from, savedPosition) {
        return new Promise(resolve => {
            if (savedPosition) {
                return savedPosition;
            } else {
                if (from.meta.saveSrollTop) {
                    const top: number = document.documentElement.scrollTop || document.body.scrollTop;
                    resolve({ left: 0, top });
                }
            }
        });
    }
});

/**
 * 全局前置守卫
 */
router.beforeEach(async (_to, _from) => {
    NProgress.start();
});

/**
 * 全局后置钩子
 */
router.afterEach((_to, _from) => {
    NProgress.done();
});

export default router;
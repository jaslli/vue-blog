/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
    /**
     * 环境变量配置
     */
    interface ViteEnv {
        VITE_PORT: number;
        VITE_BASE_API: string;
    }

}
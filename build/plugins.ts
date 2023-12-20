import vue from "@vitejs/plugin-vue";
import { type PluginOption } from 'vite';
import ElementPlus from 'unplugin-element-plus/vite'

export function getPluginsList() {
    // 默认的plugins数组
    const vitePlugins: Array<PluginOption | PluginOption[]> = [
        // vue支持
        vue(),
        // element-plus
        ElementPlus({
            useSource: true,
        }),
    ];

    return vitePlugins;
}
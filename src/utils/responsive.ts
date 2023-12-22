// 响应式storage
import type { App } from "vue";
import Storage from "responsive-storage";
import { responsiveStorageNameSpace } from "@/config";

export const injectResponsiveStorage = (app: App, config: ServerConfig) => {
    const nameSpace = responsiveStorageNameSpace();
    app.use(Storage, { nameSpace, memory: config });
};

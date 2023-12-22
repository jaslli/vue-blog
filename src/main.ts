import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from "./router";
import { getServerConfig } from "./config";

// 重置样式
import "./styles/reset.scss";
// tailwind样式
import './styles/tailwind.css'
// 公共样式
import "./styles/index.scss"
// 导入iconfont图标
import "./assets/iconfont"
import {injectResponsiveStorage} from "@/utils/responsive";

const app = createApp(App);
getServerConfig(app).then(async config => {
    app.use(router);
    await router.isReady();
    injectResponsiveStorage(app, config);
    app.use(ElementPlus);
    app.mount("#app");
});

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from "./router";

// 重置样式
import "./styles/reset.scss";
// tailwind样式
import './styles/tailwind.css'
// 公共样式
import "./styles/index.scss"
// 导入iconfont图标
import "./assets/iconfont"

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount("#app");


<script lang="ts">
import {defineComponent} from "vue";
import {ElConfigProvider} from "element-plus";

export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  }
});
</script>

<script setup lang="ts">
import Nprogress from "@/utils/nprogress";
import {onMounted, onUnmounted} from "vue"
const scrolling = () => {
  // 获取滚动条到文档顶部的距离
  let scrollTop:number = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
  // 获取可视区的高度
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  // 获取滚动条的总高度
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  // 计算屏幕剩余的高度
  let subHeight = scrollHeight - windowHeight;
  // 当前位置的百分比
  let scrollY = scrollTop / subHeight;
  // 设置NProgress
  Nprogress.set(scrollY)
};

// 组件挂载后回调
onMounted(() => {
  window.addEventListener("scroll", scrolling);
})
// 组件卸载后回调
onUnmounted(() => {
  window.removeEventListener("scroll", scrolling);
})
</script>

<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>


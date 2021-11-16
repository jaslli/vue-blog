<template>
  <v-app id="inspire">
    <!-- 导航栏 -->
    <TopBar />
    <!-- 正文内容 -->
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import TopBar from "./TopBar.vue";
import Footer from "./Footer.vue"

export default {
  components: { TopBar, Footer },
  data: () => ({}),
};
</script>

<style scoped>
</style>
<template>
  <v-app id="inspire">
    <!-- 导航栏 -->
    <TopBar />
    <!-- 正文内容 -->
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "./TopBar.vue";

export default {
  components: { TopBar },
  data: () => ({}),
};
</script>

<style scoped>
</style>
<template>
  <v-app id="inspire">
    <TopBar />
    <Main />
  </v-app>
</template>

<script>
import TopBar from "./TopBar.vue";
import Main from "./Main.vue";

export default {
  components: { TopBar, Main },
  data: () => ({}),
};
</script>

<style scoped>
</style>
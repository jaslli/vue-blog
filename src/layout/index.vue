<script setup lang="ts">
import Header from "./components/header/index.vue"
import Main from "./components/main/index.vue"
import Footer from "./components/footer/index.vue"
</script>

<template>
  <div class="layout-wrapper">
    <div class="header-wrapper">
      <Header />
    </div>
    <div class="main-wrapper">
      <Main />
    </div>
    <div class="footer-wrapper">
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout-wrapper {
    height: 100%;
    @apply flex-col;

    .header-wrapper {
      height: 50px;
    }
    .main-wrapper {
      @apply flex-1;
    }
    .footer-wrapper {
      height: 50px;
    }
  }
</style>
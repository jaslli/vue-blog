<template>
  <!-- 其他页面的banner -->
  <v-banner height="350px" shaped>
    <div class="banner animate__animated animate__pulse" :style="banner()">
      <div class="banner-container">
        <h1>{{ title }}</h1>
        <slot></slot>
      </div>
    </div>
  </v-banner>
</template>

<script>
export default {
  name: "banner",
  props: {
    bannerCover: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      require: true,
    },
  },
  computed: {
    banner() {
      return function () {
        return "background-image: url(" + this.bannerCover + ");";
      };
    },
  }
};
</script>

<style scoped>
.banner {
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  height: 440px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
}

.banner .banner-container {
  color: #d81e06;
  margin-top: 200px;
}

.v-application a {
  color: black !important;
  text-decoration: none;
}
</style>
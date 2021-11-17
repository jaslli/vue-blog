<template>
  <!-- 其他页面的banner -->
  <v-banner height="350px" shaped>
    <div class="banner" :style="bannerCover">
      <div class="banner-container">
        <h1>{{ title }}</h1>
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
</style>
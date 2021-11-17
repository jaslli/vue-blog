<template>
  <div>
    <!-- 分类页banner -->
    <v-banner height="350px" shaped>
      <div class="banner" :style="bannerCover()">
        <div class="banner-container">
          <h1>分类页</h1>
        </div>
      </div>
    </v-banner>
    <v-container fluid>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 20 : 4"
            rounded="lg"
            class="categories-container"
          >
            <ul class="categories-list">
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
            </ul>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    // 设置分类页banner
    bannerCover() {
      return function () {
        let banner = "https://img.yww52.com/about_top_img.jpg";
        // TODO 寻找vuex中的banner图
        return "background-image: url(" + banner + ");";
      };
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

.categories-container {
  width: 900px;
  margin: 0 auto 50px auto;
  padding: 50px 35px;
}

.categories-container .categories-list {
  list-style: none;
  margin: 0 2rem;
}

.categories-container .categories-list li {
  margin-bottom: 10px;
}

.categories-container .categories-list li:before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  position: relative;
  left: -0.75rem;
  border: 0.2rem solid #49b1f5;
  border-radius: 50%;
  background: #fff;
  transition-duration: 0.3s;
}

.categories-container .categories-list li:hover:before {
  border: 0.2rem solid #ff7242;
}

/* 超链接样式 */
.v-application a {
  color: black !important;
  text-decoration: none;
}
</style>
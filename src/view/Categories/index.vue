<template>
  <div>
    <!-- 归档页banner -->
    <v-parallax
      height="400"
      class="banner"
      src="https://img.yww52.com/about_top_img.jpg"
    >
      <div class="banner-container">
        <h1>归档页</h1>
      </div>
    </v-parallax>
    <v-container fluid>
      <v-row>
        <!-- 文章列表 -->
        <v-col cols="12" md="9" order-md="2">
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card :color="item.color" dark>
                <v-card-title class="text-h6"> Lorem Ipsum Dolor </v-card-title>
                <v-card-text class="white text--primary">
                  <p>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </p>
                  <v-btn :color="item.color" class="mx-0" outlined>
                    Button
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <!-- 侧边栏 -->
        <Aside />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Aside from "@/layout/Aside";
export default {
  name: "Categories",
  components: { Aside },
  data() {
    return {
      // 文章列表
      articleList: [
        {
          title: "环境搭建手册",
          img: "https://img.yww52.com/2020/6/2020-6-27top_img.jpg",
          isTop: 1,
          categoryName: "yww",
          introduction: "ywwwwwwwwwwwwwwwwwwwww",
          createdTime: "2021-03-04",
          updatedTime: "2021-03-04",
        },
        {
          title: "hello",
          img: "https://img.yww52.com/2020/6/2020-6-27top_img.jpg",
          isTop: 0,
          categoryName: "yww",
          introduction: "ywwwwwwwwwwwwwwwwwwwww",
          createdTime: "2021-03-04",
          updatedTime: "2021-03-04",
        },
      ],
      // 文章总数
      total: 15,
      // 页数
      page: 5,
      // 最大可见分页数
      totalVisible: 5,
      // 当前选定页
      index: 1,
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon",
        },
        {
          color: "indigo",
          icon: "mdi-buffer",
        },
      ],
    };
  },
  computed: {
    // 设置主页banner
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
  text-align: center;
  margin-top: -100px;
}

.banner .banner-container {
  color: #d81e06;
  margin-top: 200px;
}
</style>
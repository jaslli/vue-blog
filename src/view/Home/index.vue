<template>
  <v-container fluid>
    <!-- 主页banner -->
    <div class="banner" :style="bannerCover()"></div>

    <v-row>
      <!-- 文章列表 -->
      <v-col cols="12" md="9" order-md="2">
        <!-- 文章卡片 -->
        <v-hover v-for="(item, index) in articleList" :key="index">
          <template v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 20 : 4"
              rounded="lg"
              class="article-card"
            >
              <!-- 文章封面 -->
              <div :class="location(index)">
                <router-link to="/">
                  <v-img
                    width="100%"
                    height="100%"
                    :src="item.img"
                    class="article-hover"
                  />
                </router-link>
              </div>
              <!-- 文章信息 -->
              <div class="article-info">
                <!-- 标题 -->
                <div class="article-title">
                  <router-link to="/">
                    {{ item.title }}
                  </router-link>
                </div>
                <!-- 文章标识 -->
                <div class="article-mark">
                  <!-- 置顶标识 -->
                  <span class="isTop" v-if="item.isTop === 1">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconzhiding" />
                    </svg>
                    置顶
                    <span class="separator">|</span>
                  </span>
                  <!-- 发表时间 -->
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconrili" />
                  </svg>
                  发表于 {{ item.createdTime }}
                  <span class="separator">|</span>
                  <!-- 更新时间 -->
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icongengxinriqitishi" />
                  </svg>
                  更新于 {{ item.updatedTime }}
                  <span class="separator">|</span>
                  <!-- 文章分类 -->
                  <router-link to="/">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconfenlei1" />
                    </svg>
                    {{ item.categoryName }}
                  </router-link>
                </div>
                <div class="article-introduction">
                  {{ item.introduction }}
                </div>
              </div>
            </v-card>
          </template>
        </v-hover>
        <!-- 分页 -->
        <div class="Pagination">
          <v-pagination
            :value="index"
            v-model="total"
            :length="page"
            :total-visible="totalVisible"
          ></v-pagination>
        </div>
      </v-col>
      <!-- 侧边栏 -->
      <Aside />
    </v-row>
  </v-container>
</template>

<script>
import Aside from "@/layout/Aside";
export default {
  name: "Home",
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
    };
  },
  computed: {
    // 判定文章封面的排列，偶数封面在右，奇数在左
    location() {
      return function (index) {
        if (index % 2 === 0) {
          return "article-cover left-radius";
        } else {
          return "article-cover right-radius";
        }
      };
    },
    // 设置主页banner
    bannerCover() {
      return function () {
        let banner = "https://img.yww52.com/about_top_img.jpg";
        // TODO 寻找vuex中的banner图
        return (
          "background: url(" + banner + ") center center / cover no-repeat"
        );
      };
    },
  },
};
</script>



<style scoped>
.banner {
  position: absolute;
  top: -64px;
  left: 0;
  right: 0;
  height: 100vh;
  background-attachment: fixed;
}

.article-card {
  display: flex;
  align-items: center;
  height: 280px;
  width: 100%;
  max-width: 877.5px;
  margin-top: 12px;
  margin-bottom: 20px;
  left: 72px;
}

.article-card .article-cover {
  overflow: hidden;
  height: 100%;
  width: 45%;
}

.article-card .article-cover .article-hover {
  transition: all 0.6s;
}

.left-radius {
  border-radius: 8px 0 0 8px !important;
  order: 0;
}

.right-radius {
  border-radius: 0 8px 8px 0 !important;
  order: 1;
}

.article-card:hover .article-cover .article-hover {
  transform: scale(1.1);
}

.article-card .article-info {
  width: 55%;
  font-size: 14px;
  padding: 0 40px;
}

.article-card .article-info .article-title {
  line-height: 1.4;
  font-size: 1.72em;
  margin-bottom: 6px;
}

.article-card .article-info .article-mark {
  font-size: 12.6px;
}

.article-card .article-info .article-mark .isTop {
  color: #d81e06;
}

.article-card .article-info .article-mark .separator {
  margin: 0 6px;
  color: #909090;
}

.article-card .article-info .article-introduction {
  margin-top: 12px;
}

.Pagination {
  margin-top: 20px;
}

/* 超链接样式 */
.v-application a {
  color: black !important;
  text-decoration: none;
}

.icon {
  width: 1.3em;
  height: 1.3em;
  fill: currentColor;
  vertical-align: -0.25em;
  overflow: hidden;
}
</style>
<template>
  <div>
    <!-- 主页banner -->
    <v-banner height="100vh" shaped>
      <div
        class="banner animate__animated animate__pulse"
        :style="bannerCover()"
      >
        <!-- 博客主标题 -->
        <div class="banner-container">
          <h1>{{ title }}</h1>
        </div>
        <!-- 向下滚动 -->
        <div class="scroll-down" @click="$vuetify.goTo($refs.content)">
          <v-icon color="#fff" class="scroll-down-effects">
            mdi-chevron-down
          </v-icon>
        </div>
      </div>
    </v-banner>
    <v-container fluid ref="content">
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
                  <router-link :to="'/article/' + item.id">
                    <v-img
                      width="100%"
                      height="100%"
                      :src="item.cover"
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
                    <span class="isTop" v-if="item.top">
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
                    发表于 {{ item.createTime }}
                    <span class="separator">|</span>
                    <!-- 更新时间 -->
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icongengxinriqitishi" />
                    </svg>
                    更新于 {{ item.updateTime }}
                    <span class="separator">|</span>
                    <!-- 文章分类 -->
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconfenlei1" />
                    </svg>
                    <router-link :to="'/category/' + item.categoryId">
                      {{ item.categoryName }}
                    </router-link>
                  </div>
                  <div class="article-introduction">
                    {{ item.description }}
                  </div>
                </div>
              </v-card>
            </template>
          </v-hover>
          <!-- 分页 -->
          <div class="Pagination">
            <v-pagination
              v-model="current"
              :length="pages"
              :total-visible="totalVisible"
              @input="pageselect"
            />
          </div>
        </v-col>
        <!-- 侧边栏 -->
        <Aside />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import { pageselect } from "@/api/article.js";
export default {
  name: "Home",
  components: { Aside },
  data() {
    return {
      // 博客主标题
      title: "",
      // banner图
      banner: "",
      // 文章列表
      articleList: [],
      // 页数
      pages: 0,
      // 当前选定页(页码)
      current: 1,
      // 每页记录数
      limit: 10,
      // 最大可见分页数
      totalVisible: 5,
      // 是否是首次进入
      first: true,
    };
  },
  created() {
    this.init();
    this.pageselect();
  },
  methods: {
    init() {
      if (this.$store.state.title && this.$store.state.homeBanner) {
        this.title = this.$store.state.title;
        this.banner = this.$store.state.homeBanner;
      } else {
        const that = this;
        setTimeout(function () {
          that.init();
        }, 500);
      }
    },
    // 分页查询文章
    pageselect(current = 1) {
      this.current = current;
      pageselect(this.current, this.limit)
        .then((response) => {
          this.articleList = response.data.list;
          this.pages = response.data.pages;
        })
        .catch((error) => {
          console.log(error);
        });
      if (this.first) {
        this.first = false;
        return;
      }
      this.$vuetify.goTo(this.$refs.content);
    },
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
        return "background-image: url(" + this.banner + ");";
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
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.banner .banner-container {
  height: 100vh;
  color: #d81e06;
  padding-top: 40vh;
}

.scroll-down {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.scroll-down i {
  font-size: 3rem;
}

.scroll-down-effects {
  color: #eee !important;
  text-align: center;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  line-height: 1.5;
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  animation: scroll-down-effect 1.5s infinite;
}

@keyframes scroll-down-effect {
  0% {
    top: 0;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
  50% {
    top: -16px;
    opacity: 1;
    filter: none;
  }
  100% {
    top: 0;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
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

.article-card .article-info .article-title a {
  color: black;
  text-decoration: none;
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

.article-card .article-info .article-mark a {
  color: black;
  text-decoration: none;
}

.article-card .article-info .article-mark a:hover {
  color: #4DAAE8
}


.article-card .article-info .article-introduction {
  margin-top: 1rem;
  line-height: 1.5;
  font-size: 16px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.Pagination {
  margin-top: 20px;
}

/* 超链接样式 */
/* .v-application a {
  color: black !important;
  text-decoration: none;
} */


.icon {
  width: 1.3em;
  height: 1.3em;
  fill: currentColor;
  vertical-align: -0.25em;
  overflow: hidden;
}
</style>
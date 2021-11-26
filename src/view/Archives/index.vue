<template>
  <div>
    <!-- 归档页banner -->
    <banner title="归档页" :bannerCover="bannerCover()" />
    <v-container fluid>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 20 : 4"
            rounded="lg"
            class="timeline-container"
          >
            <div class="title">你已经写了{{ total }}篇文章，请继续加油。</div>
            <!-- 时间轴 -->
            <v-timeline class="timeline">
              <!-- 时间轴标头 -->
              <!-- 时间轴主体 -->
              <v-timeline-item
                v-for="(article, index) in articleList"
                :key="index"
                small
                :color="PointColor()"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      :elevation="hover ? 20 : 4"
                      rounded="lg"
                      class="timeline-item  animate__animated animate__pulse"
                      :style="location(index)"
                    >
                      <router-link :to="'/article/' + article.id">
                        <v-img :src="article.cover" class="article-img" />
                      </router-link>
                      <div class="article-context">
                        <!-- 发表时间 -->
                        <div class="article-time">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconrili" />
                          </svg>
                          {{ article.createTime }}
                        </div>
                        <router-link to="/archives" class="article-title">
                          {{ article.title }}
                        </router-link>
                      </div>
                    </v-card>
                  </template>
                </v-hover>
              </v-timeline-item>
            </v-timeline>
            <!-- 分页 -->
            <div class="Pagination">
              <v-pagination
                v-model="current"
                :length="pages"
                :total-visible="totalVisible"
                @input="pageselect"
              />
            </div>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
import banner from "@/components/banner";
import { page } from "@/api/article.js";
export default {
  name: "Archives",
  components: { banner },
  data() {
    return {
      // TODO 区分年份或者月份
      // banner图
      banner: "",
      // 文章列表
      articleList: [],
      // 文章总数
      total: 0,
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
      // 点容器的颜色
      pointcolor: [
        "red lighten-1",
        "pink lighten-1",
        "purple lighten-1",
        "deep-purple lighten-1",
        "indigo lighten-1",
        "blue lighten-1",
        "green lighten-1",
        "light-blue lighten-1",
        "cyan lighten-1",
        "teal lighten-1",
        "light-green lighten-1",
        "lime lighten-1",
        "yellow lighten-1",
        "amber lighten-1",
        "orange lighten-1",
        "deep-orange lighten-1",
        "blue-grey lighten-1",
        "grey lighten-1",
      ],
    };
  },
  created() {
    this.init();
    this.pageselect();
  },
  computed: {
    // 判定文章的方向
    location() {
      return function (index) {
        if (index % 2 != 0) {
          return "flex-direction: row-reverse;";
        } else {
          return "";
        }
      };
    },
    // 设置归档页banner
    bannerCover() {
      return function () {
        return this.banner;
      };
    },
    // 点容器的随机颜色
    PointColor() {
      return function () {
        return this.pointcolor[
          Math.floor(Math.random() * this.pointcolor.length)
        ];
      };
    },
  },
  methods: {
    // 分页查询文章
    pageselect(current = 1) {
      this.current = current;
      page(this.current, this.limit, null)
        .then((response) => {
          this.articleList = response.data.arList;
          this.pages = response.data.pages;
          this.total = response.data.total;
          if (this.first) {
            this.first = false;
            return;
          }
          this.$vuetify.goTo(150);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    init() {
      if (this.$store.state.archivesBanner) {
        this.banner = this.$store.state.archivesBanner;
      } else {
        const that = this;
        setTimeout(function () {
          that.init();
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.timeline-container {
  width: 900px;
  margin: 0 auto 50px auto;
  padding: 50px 35px;
}

.timeline-container .title {
  margin-bottom: 10px;
}

.timeline-container .timeline .timeline-item {
  display: flex;
  width: 350px;
  height: 120px;
  overflow: hidden;
}

.timeline-container .timeline .timeline-item .article-img {
  width: 120px;
  height: 100%;
  transition: all 0.6s;
}

.timeline-container .timeline .timeline-item:hover .article-img {
  transform: scale(1.1);
}

.timeline-container .timeline .timeline-item .article-context {
  width: 247px;
  padding: 20px 0 0 20px;
}

.timeline-container .timeline .timeline-item .article-context .article-time {
  color: #858585;
  margin-bottom: 17px;
}

.timeline-container .timeline .timeline-item .article-context .article-title {
  font-size: 1.3em;
  color: black;
  text-decoration: none;
}

.timeline-container
  .timeline
  .timeline-item
  .article-context
  .article-title:hover {
  color: #49b1f5;
}

.timeline-container .Pagination {
  margin-top: 30px;
}

.icon {
  width: 1.3em;
  height: 1.3em;
  fill: currentColor;
  vertical-align: -0.25em;
  overflow: hidden;
}
</style>
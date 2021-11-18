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
                      class="timeline-item"
                      :style="location(index)"
                    >
                      <router-link to="/archives">
                        <v-img :src="article.img" class="article-img" />
                      </router-link>
                      <div class="article-context">
                        <!-- 发表时间 -->
                        <div class="article-time">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconrili" />
                          </svg>
                          {{ article.createdTime }}
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
                :value="index"
                v-model="total"
                :length="page"
                :total-visible="totalVisible"
              ></v-pagination>
            </div>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
import banner from "@/components/banner";
export default {
  name: "Archives",
  components: { banner },
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
      // 点容器的颜色
      pointcolor: [
        'red lighten-1',
        'pink lighten-1',
        'purple lighten-1',
        'deep-purple lighten-1',
        'indigo lighten-1',
        'blue lighten-1',
        'green lighten-1'
      ]
    };
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
        let banner = "https://img.yww52.com/about_top_img.jpg";
        // TODO 寻找vuex中的banner图
        return "background-image: url(" + banner + ");";
      };
    },
    // 点容器的随机颜色
    PointColor() {
      return function() {
        return this.pointcolor[Math.floor(Math.random()*this.pointcolor.length)]
      }
    }
  },
};
</script>

<style scoped>
.timeline-container {
  width: 900px;
  margin: 0 auto 50px auto;
  padding: 50px 35px;
}

.timeline-container .timeline .timeline-item {
  display: flex;
  width: 350px;
  height: 120px;
  overflow: hidden;
}

.timeline-container .timeline .timeline-item .article-img {
  width: 120px;
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
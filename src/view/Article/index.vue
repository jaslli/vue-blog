<template>
  <div>
    <!-- 文章页banner -->
    <banner :title="article.title" :bannerCover="bannerCover()">
      <div class="meta-firstline">
        <!-- 发表时间 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconrili" />
        </svg>
        发表于 {{ article.createTime }}
        <span class="separator">|</span>
        <!-- 更新时间 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icongengxinriqitishi" />
        </svg>
        更新于 {{ article.updateTime }}
        <span class="separator">|</span>
        <!-- 文章分类 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconfenlei1" />
        </svg>
        <router-link to="/">
          {{ article.categoryName }}
        </router-link>
      </div>
      <!-- TODO -->
      <div class="meta-secondline"></div>
    </banner>
    <v-container fluid>
      <v-row>
        <v-hover cols="12" md="9">
          <template v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 20 : 4"
              rounded="lg"
              class="article-container animate__animated animate__pulse"
            >
              <VueShowdown
                :markdown="content"
                :options="option"
                class="markdown-body"
              />
            </v-card>
          </template>
        </v-hover>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import banner from "@/components/banner";
import "@/assets/markdown.css"
import { getById, getContent } from "@/api/article";
export default {
  name: "About",
  components: { banner },
  data() {
    return {
      banner: "",
      article: {},
      content: "",
      // VueShowdown
      option: {
        emoji: true,
        omitExtraWLInCodeBlocks: true,
        simpleLineBreaks: true
      }
    };
  },
  created() {
    this.getById();
    this.getContent();
  },
  computed: {
    bannerCover() {
      return function () {
        return this.banner;
      };
    },
  },
  methods: {
    // 获取文章数据
    getById() {
      getById(this.$route.params.articleId)
        .then((response) => {
          this.article = response.data;
          this.banner = response.data.cover;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 获取文章内容
    getContent() {
      getContent(this.$route.params.articleId)
        .then((response) => {
          this.content = response.data.content;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.article-container {
  width: 900px;
  min-height: 100px;
  margin: 0 auto 50px auto;
  padding: 50px 35px;
}

.meta-firstline {
  margin-top: 12px;
  color: black;
}

.meta-firstline a {
  color: black;
  text-decoration: none;
}

.meta-firstline a:hover {
  color: #4daae8;
}

.separator {
  margin: 0 6px;
  color: #909090;
}

.icon {
  width: 1.3em;
  height: 1.3em;
  fill: currentColor;
  vertical-align: -0.25em;
  overflow: hidden;
}
</style>
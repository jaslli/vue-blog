<template>
  <div>
    <!--
      电脑的导航栏
      在sm及以上的大小隐藏 transparent

      
    -->
    <!-- <v-app-bar
      color="transparent"
      class="hidden-sm-and-up"
      flat
      app
      hide-on-scroll
    >
      <v-container>
        <div class="mobile-container">
          <router-link to="/" class="link"> yww </router-link>
          <v-btn text>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icontuozhan" />
            </svg>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar> -->

    <!--
      电脑的导航栏
      仅在xs的大小隐藏 class="hidden-xs-only"
    -->
    <v-app-bar :class="barClass" app hide-on-scroll flat>
      <v-container class="top-container" fluid>
        <!-- 副标题 -->
        <router-link to="/" class="subtitle"> {{ subtitle }} </router-link>
        <!-- 导航 -->
        <ul class="top-links">
          <li>
            <router-link to="/" class="link">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconfaxian-copy" />
              </svg>
              首页
            </router-link>
          </li>
          <li>
            <router-link to="/archives" class="link">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconbumenguidangtongji" />
              </svg>
              归档
            </router-link>
          </li>
          <li>
            <router-link to="/categories" class="link">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconfenlei" />
              </svg>
              分类
            </router-link>
          </li>
          <li>
            <router-link to="/link" class="link">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconlianjie" />
              </svg>
              友链
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="link">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconaixin" />
              </svg>
              关于
            </router-link>
          </li>
        </ul>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import "@/assets/iconfont.js";
export default {
  name: "TopBar",
  data() {
    return {
      // 滚动到顶的样式
      barClass: 'bar-top',
      // 博客的副标题
      subtitle: ''
    };
  },
  mounted() {
    // 监听滚动条
    window.addEventListener("scroll", this.scroll);
  },
  created() {
    this.subtitle = this.$store.state.subtitle
  },
  methods: {
    scroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 64) {
        this.barClass = "bar";
      } else {
        this.barClass = "bar-top";
      }
    },
  }
};
</script>

<style scoped>

.bar {
  background: rgba(255,255,255,.8) !important;
  box-shadow: 0 5px 6px -5px rgb(133 133 133 / 60%) !important;
}

.bar-top {
  background: transparent !important;
}

.bar-top a {
  color: #eee !important;
}

.top-container {
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
}

.subtitle {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: #4c4948;
  font-weight: 700;
  font-size: 1.3rem;
}

.subtitle:hover {
  color: #49B1F5;
}

.link {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: #4c4948;
  font-size: 1.25rem;
}

.link:after {
  content: "";
  position: absolute;
  height: 3px;
  width: 0;
  background-color: #80c8f8;
  left: 0;
  bottom: -6px;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}

.link:hover {
  color: #49B1F5;
}

.link:hover:after {
  width: 100%;
}

.top-links li {
  float: left;
  list-style: none;
  margin-left: 1rem;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.mobile-container {
  display: flex;
  justify-content: space-between;
}
</style>
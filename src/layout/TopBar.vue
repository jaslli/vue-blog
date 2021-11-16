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
    <v-app-bar color="transparent" app hide-on-scroll flat>
      <v-container class="top-container" fluid>
        <!-- 标题 -->
        <router-link to="/" class="link"> yww </router-link>
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
    return {};
  },
};
</script>

<style scoped>
.top-container {
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
}

.link {
  cursor: pointer;
  text-decoration: none;
  color: #4c4948;
  font-size: 1.25rem;
}

.link:hover {
  color: #13e2b5;
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
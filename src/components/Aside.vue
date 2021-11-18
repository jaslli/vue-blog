<template>
  <v-col cols="12" md="3" order-md="1">
    <v-container fluid>
      <div id="Aside" class="d-flex flex-column align-center">
        <!-- 个人信息 -->
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              class="author d-flex flex-column align-center justify-center"
              :elevation="hover ? 20 : 4"
              rounded="lg"
            >
              <v-avatar size="110">
                <v-img :src=$store.getters.Avatar />
              </v-avatar>
              <span>{{$store.getters.name}}</span>
              <p>{{$store.getters.desc}}</p>
              <div class="social">
                <a href="javascript:;">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconQQ" />
                  </svg>
                </a>
                <a href="javascript:;">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconbilibili" />
                  </svg>
                </a>
                <a href="javascript:;">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconweixin" />
                  </svg>
                </a>
                <a href="javascript:;">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconGitHub" />
                  </svg>
                </a>
                <a href="javascript:;">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconyouxiang" />
                  </svg>
                </a>
              </div>
            </v-card>
          </template>
        </v-hover>
        <!-- 公告栏 -->
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              class="notice d-flex flex-column"
              :elevation="hover ? 20 : 4"
              rounded="lg"
            >
              <div class="notice-title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icongonggao" />
                </svg>
                <span>公告</span>
              </div>
              <div class="notice-context">
                {{ $store.getters.notice }}
              </div>
            </v-card>
          </template>
        </v-hover>
        <!-- 小姐姐栏 -->
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              class="lovely d-flex flex-column"
              :elevation="hover ? 20 : 4"
              rounded="lg"
            >
              <v-img
                src="https://img.yww52.com/lovely.jpg"
                class="lovely-img"
              />
            </v-card>
          </template>
        </v-hover>
        <!-- 网站资讯 -->
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              class="website d-flex flex-column"
              :elevation="hover ? 20 : 4"
              rounded="lg"
            >
              <div class="website-title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconwangzhankaifa-" />
                </svg>
                <span>网站资讯</span>
              </div>

              <ul class="website-info">
                <li>
                  <div>文章数目:</div>
                  <span>{{ arctilTotal }}</span>
                </li>
                <li>
                  <div>本站总字数:</div>
                  <span>{{ textTotal }}k</span>
                </li>
                <li>
                  <div>本站总访问量:</div>
                  <span>{{ peopleTotal }}</span>
                </li>
              </ul>
            </v-card>
          </template>
        </v-hover>
      </div>
    </v-container>
  </v-col>
</template>

<script>
import "@/assets/iconfont.js";

export default {
  name: "Aside",
  data() {
    return {
      arctilTotal: 64,
      textTotal: 161.4,
      peopleTotal: 15014
    };
  },
};
</script>

<style scoped>
#Aside {
  width: 100%;
  height: 1000px;
}

.author {
  height: 342.4px;
  min-width: 277.5px;
  left: 110px;
}

.author img {
  width: 100%;
}

.author span {
  margin-top: 20px;
  font-size: 25px;
  margin-bottom: 10px;
}

.author .social {
  margin-top: 15px;
}

.author .social a {
  margin-left: 10px;
}

.notice {
  margin-top: 20px;
  min-width: 277.5px;
  min-height: 67.6px;
  padding: 20px 24px;
  left: 110px;
}

.notice .notice-title {
  padding-top: 4.8px;
  padding-bottom: 0.3rem;
}

.notice .notice-title svg {
  font-size: 14px;
  animation: noli 0.8s linear infinite;
}

@keyframes noli {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.notice .notice-title span {
  margin-left: 10px;
  font-size: 1.1em;
}

.notice .notice-context {
  font-size: 14px;
  line-height: 2;
}

.lovely {
  margin-top: 20px;
  width: 277.5px;
  min-width: 277.5px;
  padding: 20px 24px;
  left: 110px;
}

.lovely .lovely-img {
  width: 229;
}

.website {
  margin-top: 20px;
  min-width: 277.5px;
  padding: 20px 24px;
  left: 110px;
}

.website .website-title {
  padding-top: 4.8px;
  padding-bottom: 0.3rem;
}

.website .website-title svg {
  font-size: 14px;
}

.website .website-title span {
  margin-left: 10px;
  font-size: 1.1em;
}

.website .website-info {
  padding-left: 0px;
}

.website .website-info li {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 2px 10px 0 10px;
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
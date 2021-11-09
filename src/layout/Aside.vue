<template>
  <v-col cols="3" v-resize="onResize" v-if="flag">
    <v-container fluid>
      <div id="Aside" class="d-flex flex-column align-center">
        <div class="author d-flex flex-column align-center justify-center">
          <v-avatar size="110">
            <v-img src="https://img.yww52.com/avatar.jpg" />
          </v-avatar>
          <span>Yw</span>
          <p>永远相信美好的事情即将发生</p>
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
        </div>
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
      flag: true,
    };
  },
};
</script>

<style scoped>
#Aside {
  /* position: fixed; */
  width: 100%;
  margin-right: 10px;
  height: 1000px;
}

.author {
  height: 500px;
  height: 342.4px;
  width: 85%;
  background: red;
  border-radius: 20px;
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

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
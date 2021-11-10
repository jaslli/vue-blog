<template>
  <v-col cols="2" v-if="flag">
    <v-container fluid>
      <div id="Aside" class="d-flex flex-column align-center">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              class="author d-flex flex-column align-center justify-center"
              :elevation="hover ? 20 : 4"
              rounded="lg"
            >
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
      flag: true,
    };
  },
};
</script>

<style scoped>
#Aside {
  /* position: fixed; */
  width: 100%;
  height: 1000px;
}

.author {
  height: 342.4px;
  min-width: 277.5px;
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
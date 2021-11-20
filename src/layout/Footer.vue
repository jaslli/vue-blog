<template>
  <v-footer color="transparent">
    <div class="footer-container d-flex flex-column align-center">
      <div>©{{ createdTime }} - {{ nowTime }} By Yw</div>
      <div>
        小破站已经安全运行 {{ year }} 年 {{ day }} 日 {{ hour }} 时
        {{ minute }} 分 {{ second }} 秒
      </div>
      <div class="cdn">
        由
        <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referra">
          <img src="https://img.yww52.com/cdnlogo.png" />
        </a>
        提供加速服务
      </div>
      <div class="icp">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconbeian" />
        </svg>
        <a href="https://beian.miit.gov.cn/">{{icp}}</a>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      createdTime: 2018,
      nowTime: 0,
      icp: "桂ICP备20005765号",
      year: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
  },
  watch: {
    year() {},
    day() {},
    hour() {},
    minute() {},
    second() {},
  },
  mounted: function () {
    this.running();
  },
  created: function () {
    this.nowTime = new Date().getFullYear();
  },
  methods: {
    // 计时器
    running() {
      let create_time = Math.round(
        new Date(18200 * 24 * 60 * 60 * 1000).getTime() / 1000
      );
      let timestamp = Math.round(
        (new Date().getTime() + 8 * 60 * 60 * 1000) / 1000
      );
      let second = timestamp - create_time;
      if (second >= 365 * 24 * 3600) {
        this.year = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
      }
      if (second >= 24 * 3600) {
        this.day = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
      }
      if (second >= 3600) {
        this.hour = parseInt(second / 3600);
        second %= 3600;
      }
      if (second >= 60) {
        this.minute = parseInt(second / 60);
        second %= 60;
      }
      if (second > 0) {
        this.second = second;
      }
      const that = this;
      // 递归
      setTimeout(function () {
        that.running();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  padding: 40px 20px;
}

.footer-container div {
    margin-bottom: 5px;
}

.footer-container .cdn {
    height: 24px;
}

.footer-container .cdn img {
  width: 59px;
  height: 30px;
  vertical-align: bottom;
}

.footer-container .icp {
    margin-top: 3px;
}

.footer-container .icp a{
    color: brown;
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
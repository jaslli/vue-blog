<template>
  <div>
    <!-- 关于页banner -->
    <banner title="关于页" :bannerCover="bannerCover()" />
    <v-container fluid>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 20 : 4"
            rounded="lg"
            class="about-container"
          >
            <div>正在设计开发</div>
            <button @click="alert">Random Message</button>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
import banner from "@/components/banner";
export default {
  name: "About",
  data() {
    return {
      banner: '',
      messages: [
        { message: '恭喜你，这是一条成功消息ssssssssssssssssssssssssssssssssss', type: 'success' },
        { message: '警告哦，这是一条警告消息', type: 'warning' },
        { message: '错了哦，这是一条错误消息', type: 'error' }
      ]
    }
  },
  created() {
    this.init()
  },
  components: { banner },
  computed: {
    bannerCover() {
      return function () {
        return "background-image: url(" + this.banner + ");";
      };
    },
  },
  methods: {
    init() {
      if (this.$store.state.aboutBanner) {
        this.banner = this.$store.state.aboutBanner
      } else {
        const that = this;
        setTimeout(function () {
          that.init()
      }, 500);
      }
    },
    alert() {
      const index = Math.round(Math.random() * 2)
      const message = this.messages[index]
      this.$message({
        ...message,
        duration: 5000
      })
    }
  }
};
</script>

<style scoped>
.about-container {
  width: 900px;
  min-height: 100px;
  margin: 0 auto 50px auto;
  padding: 50px 35px;
}
</style>
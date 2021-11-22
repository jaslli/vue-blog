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
      banner: ''
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
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
  components: { banner },
  computed: {
    bannerCover() {
      return function () {
        let banner = "https://img.yww52.com/about_top_img.jpg";
        // TODO 寻找vuex中的banner图
        return "background-image: url(" + banner + ");";
      };
    },
  },
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
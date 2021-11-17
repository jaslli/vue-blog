<template>
  <div>
    <!-- 友链页banner -->
    <banner title="友链页" :bannerCover="bannerCover()" />
    <v-container fluid>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 20 : 4"
            rounded="lg"
            class="categories-container"
          >
            <ul class="categories-list">
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
              <li>
                <router-link to="/categories"> ssssss </router-link>
              </li>
            </ul>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
import banner from "@/components/banner";
export default {
  name: "Link",
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

<style>
</style>
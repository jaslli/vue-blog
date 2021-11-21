<template>
  <div>
    <!-- 分类页banner -->
    <banner title="分类页" :bannerCover="bannerCover()" />
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
  name: 'Categories',
  components: { banner },
  data() {
    return {
      banner: ''
    };
  },
  created() {
    this.banner = this.$store.state.categoriesBanner
  },
  computed: {
    // 设置分类页banner
    bannerCover() {
      return function () {
        return "background-image: url(" + this.banner + ");";
      };
    },
  },
};
</script>

<style scoped>

.categories-container {
  width: 900px;
  min-height: 100px;
  margin: 0 auto 50px auto;
  padding: 50px 35px;
}

.categories-container .categories-list {
  list-style: none;
  margin: 0 2rem;
}

.categories-container .categories-list li {
  margin-bottom: 10px;
}

.categories-container .categories-list li:before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  position: relative;
  left: -0.75rem;
  border: 0.2rem solid #49b1f5;
  border-radius: 50%;
  background: #fff;
  transition-duration: 0.3s;
}

.categories-container .categories-list li:hover:before {
  border: 0.2rem solid #ff7242;
}

/* 超链接样式 */
.v-application a {
  color: black !important;
  text-decoration: none;
}
</style>
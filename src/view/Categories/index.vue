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
          <div class="title">分类 - {{total}}</div>
            <ul class="categories-list">
              <li v-for="category in categoryList" :key="category.id" class="categories">
                <router-link to="/categories">
                  {{ category.name + "    (" + category.count + ")" }}
                </router-link>
                <!-- 有子分类的情况 -->
                <ul v-if="category.children" class="categories-child-list">
                  <li
                    class="categories-child"
                    v-for="child in category.children"
                    :key="child.id"
                  >
                    <router-link to="/categories">
                      {{ child.name + "    (" + child.count +")" }}
                    </router-link>
                  </li>
                </ul>
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
import { getList } from "@/api/category"
export default {
  name: "Categories",
  components: { banner },
  data() {
    return {
      // banner图
      banner: "",
      // 分类数据列表
      categoryList: [],
      // 分类总数
      total: 0
    };
  },
  created() {
    this.init();
    this.getList();
  },
  computed: {
    // 设置分类页banner
    bannerCover() {
      return function () {
        return "background-image: url(" + this.banner + ");";
      };
    },
  },
  methods: {
    init() {
      if (this.$store.state.categoriesBanner) {
        this.banner = this.$store.state.categoriesBanner;
      } else {
        const that = this;
        setTimeout(function () {
          that.init();
        }, 500);
      }
    },
    getList() {
      getList().then(response => {
        console.log(response.data)
        this.categoryList = response.data.list
        this.total = response.data.total
      })
      .catch(error => {
        console.log(error)
      })
    }
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

.categories-container .title {
  font-size: 2.3em !important;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 400;
}

.categories-container .categories-list {
  list-style: none;
  margin: 0 2rem;
}

.categories-container .categories-list .categories {
  margin-bottom: 15px;
}

.categories-container .categories-list .categories:before,
.categories-child:before
{
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

.categories-container .categories-child-list {
  list-style: none;
  margin: 10px 0;
}

.categories-child-list .categories-child {
  margin-bottom: 5px;
  font-size: 15px;
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
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
            class="link-container"
          >
            <div
              v-for="linkgroup in linkList"
              :key="linkgroup.id"
              class="link-group"
            >
              <!-- 分组名称 -->
              <div class="link-group-title">{{ linkgroup.name }}</div>
              <!-- 分组介绍 -->
              <div class="link-group-introduction">
                {{ linkgroup.description }}
              </div>
              <!-- 分组成员 -->
              <div class="link-list d-flex flex-wrap">
                <div
                  class="link-item"
                  v-for="link in linkgroup.children"
                  :key="link.id"
                >
                  <a :href="link.address">
                    <v-avatar size="60" class="link-item-img">
                      <img :src="link.avatar" alt="" />
                    </v-avatar>
                    <span class="link-item-name">{{ link.name }}</span>
                    <span class="link-item-desc">{{ link.description }}</span>
                  </a>
                </div>
              </div>
            </div>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
import banner from "@/components/banner";
import { getList } from "@/api/link";
export default {
  name: "Link",
  components: { banner },
  data() {
    return {
      banner: "",
      // 友链列表
      linkList: [],
    };
  },
  created() {
    this.init();
    this.getList();
  },
  computed: {
    bannerCover() {
      return function () {
        return "background-image: url(" + this.banner + ");";
      };
    },
  },
  methods: {
    init() {
      if (this.$store.state.linkBanner) {
        this.banner = this.$store.state.linkBanner;
      } else {
        const that = this;
        setTimeout(function () {
          that.init();
        }, 500);
      }
    },
    getList() {
      getList().then((response) => {
        this.linkList = response.data;
      });
    },
  },
};
</script>

<style scoped>
.link-container {
  width: 900px;
  min-height: 100px;
  margin: 0 auto 50px auto;
  padding: 50px 35px;
}

.link-container .link-group .link-group-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 14px;
  transition: margin-left 0.4s;
}

.link-container .link-group .link-group-title:hover {
  color: #49b1f5;
  margin-left: 1.3rem;
}

.link-container .link-group .link-group-introduction {
  margin-top: 4px;
  margin-bottom: 10px;
}

.link-container .link-group .link-list {
  padding: 10px 10px 0 10px;
}

.link-container .link-group .link-list .link-item {
  position: relative;
  height: 90px;
  background: transparent;
  width: calc(100% / 3 - 15px);
  margin: 15px 7px;
  line-height: 17px;
  border-radius: 0.7em;
}

.link-container .link-group .link-list .link-item a {
  height: 100%;
  width: 100%;
  display: block;
}

.link-container .link-group .link-list .link-item:hover {
  box-shadow: 0 2px 15px #49b1f5;
  background: #49b1f5;
}

.link-container .link-group .link-list .link-item .link-item-img {
  margin: 15px 10px;
  float: left;
}

.link-container .link-group .link-list .link-item .link-item-name {
  font-size: 1.43em;
  font-weight: 700;
  height: 40px;
  float: right;
  width: calc(100% - 90px);
  text-align: center;
  display: block;
  padding: 16px 10px 0 0;
  text-decoration: none;
  color: black;
}

.link-container .link-group .link-list .link-item .link-item-desc {
  height: 50px;
  display: block;
  float: right;
  width: calc(100% - 90px);
  font-size: 0.93em;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 16px 10px 16px 0;
  color: black;
}
</style>
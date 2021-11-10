<template>
  <div class="d-flex flex-column">
    <v-hover class="card">
      <template v-slot:default="{ hover }">
        <v-card
          width="89%"
          height="280px"
          class="d-flex justify-space-between"
          :elevation="hover ? 20 : 4"
          rounded="lg"
        >
          <div class="artical-info">
            <router-link to="/" class="title">
              <div style="display: inline-block;">Title</div>
            </router-link>
          </div>
          <div class="cover">
            <router-link to="/">
              <v-img
                gradient
                class="cover-img"
                lazy-src="https://picsum.photos/id/11/10/6"
                src="https://img.yww52.com/2020/6/2020-6-27top_img.jpg"
              />
            </router-link>
          </div>
        </v-card>
      </template>
    </v-hover>
    <v-hover class="card">
      <template v-slot:default="{ hover }">
        <v-card
          width="89%"
          height="280px"
          class="d-flex justify-space-between"
          :elevation="hover ? 20 : 4"
          rounded="lg"
        >
          <div class="artical-info">
            <router-link to="/" class="title">
              <div>Title</div>
            </router-link>
          </div>
          <div class="cover">
            <router-link to="/">
              <v-img
                gradient
                class="cover-img"
                lazy-src="https://picsum.photos/id/11/10/6"
                src="https://img.yww52.com/2020/6/2020-6-27top_img.jpg"
              />
            </router-link>
          </div>
        </v-card>
      </template>
    </v-hover>
    <v-hover class="card">
      <template v-slot:default="{ hover }">
        <v-card
          width="89%"
          height="280px"
          class="d-flex justify-space-between"
          :elevation="hover ? 20 : 4"
          rounded="lg"
        >
          <div class="artical-info">
            <router-link to="/" class="title">
              <div>Title</div>
            </router-link>
          </div>
          <div class="cover">
            <router-link to="/">
              <v-img
                gradient
                class="cover-img"
                lazy-src="https://picsum.photos/id/11/10/6"
                src="https://img.yww52.com/2020/6/2020-6-27top_img.jpg"
              />
            </router-link>
          </div>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.card {
  margin-bottom: 26px;
  min-width: 877.5px;
}

.card .artical-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
}

.card .artical-info .title {
  font-size: 1.72rem !important;
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.cover {
  width: 90%;
  overflow: hidden;
  border-radius: 0 8px 8px 0 !important;
}

.card .cover .cover-img {
  cursor: pointer;
  transition: all 0.6s;
  height: 100%;
  width: 100%;
}

.card:hover .cover-img {
  transform: scale(1.1);
}
</style>
<template>
  <v-main>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <Aside />
        <v-col cols="7" class="d-flex justify-center">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Aside from "./Aside.vue";
export default {
  name: "Main",
  components: { Aside },
};
</script>

<style scoped>
</style>
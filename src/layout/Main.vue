<template>
  <v-main>
    <v-container fluid>
    <v-row class="d-flex justify-center">
        <Aside />
        <v-col cols="9">
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

<style >
</style>
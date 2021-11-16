<template>
  <div v-scroll="onScroll">
    
    <v-row
      justify="center"
      align="center"
    >
      <v-subheader>Offset Top</v-subheader>
      {{ offsetTop }}
    </v-row>
    <v-container
      id="scroll-target"
      style="max-height: 400px"
      class="overflow-y-auto"
    >
      <v-row
        align="center"
        justify="center"
        style="height: 1000px"
      >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
      offsetTop: 0,
    }),
  methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    },
};
</script>

<style>
</style>
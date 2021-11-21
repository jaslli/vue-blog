<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$store.dispatch('getInfo')
    }
  }
};
</script>

<style>
</style>
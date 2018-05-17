<template>
  <keep-alive :include="cachedViews">
    <router-view ref="child"/>
  </keep-alive>
</template>
<script>
export default {
  name: 'DataLayout',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    }
  },
}
</script>
<style scoped>
</style>
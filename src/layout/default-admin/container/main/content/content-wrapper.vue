<template>
  <section class="content-wrapper">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: "ContentWrapper",
  computed: {
    key() {
      return this.$route.path;
    },
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    }
  },
  watch: {
    $route() {
      this.addTags();
      //   this.moveToCurrentTag()
    }
  },
  mounted() {
    // this.initTags()
    this.addTags();
  },
  methods: {
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addView", this.$route);
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
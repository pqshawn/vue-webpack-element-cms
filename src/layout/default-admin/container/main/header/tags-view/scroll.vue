<template>
  <el-scrollbar
    ref="scrollContainer"
    class="scroll-container"
    :vertical="false"
    @wheel.native.prevent="handleScroll"
  >
    <slot />
  </el-scrollbar>
</template>

<script>
export default {
  data() {
    return {
      tagAndTagSpacing : 5,
    }
  },
  computed: {
    scrollWrapper() {
      return this.$refs.scrollContainer.$refs.wrap;
    }
  },
  methods: {
    handleScroll(e) {
      // 参考：https://segmentfault.com/a/1190000017390159?utm_source=tag-newest
      const eventDelta = e.wheelDelta || -e.deltaX * 40
      const $scrollWrapper = this.scrollWrapper
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
    },
    handleScrollByArrow(offset) {
      const $scrollWrapper = this.scrollWrapper
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + offset
    },
    moveToTarget(currentTag) {
      const containerWidth = this.$refs.scrollContainer.$el.offsetWidth
      const tagList = this.$parent.$refs.tag
      const scrollWrapper = this.scrollWrapper
      const scrollLeft = scrollWrapper.scrollLeft
      const scrollWidth = scrollWrapper.scrollWidth
      // is-visible, no-visible 
      // check curent is first or last
      const currentIndex = tagList.findIndex(item => item === currentTag)
      if (currentIndex == 0) {
        scrollWrapper.scrollLeft = 0
      } else if (currentIndex == tagList.length) {
        scrollWrapper.scrollLeft = scrollWrapper.scrollWidth - containerWidth
      }
      // base on the beforeElement
      else {
        const beforePrevTag = tagList[currentIndex - 1];
        scrollWrapper.scrollLeft = beforePrevTag.$el.offsetLeft - this.tagAndTagSpacing
      }

    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
}
</style>
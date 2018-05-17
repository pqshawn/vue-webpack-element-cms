<template>
  <div class="tags-view-container">
    <div class="left-button" @click="handleScroll(-60)">
      <i class="el-icon-d-arrow-left"></i>
    </div>
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag)?'active':''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        class="tags-view-item"
        @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''"
        @contextmenu.prevent.native="openMenu(tag, $event)"
      >
        {{ tag.title }}
        <span
          v-if="!isAffix(tag)"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </scroll-pane>
    <div class="right-button" @click="handleScroll(60)">
      <i class="el-icon-d-arrow-right"></i>
    </div>
    <ul v-show="visible" class="contextmenu">
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭全部</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from "./scroll";
import path from "path";

export default {
  components: { ScrollPane },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews;
    }
  },
  watch: {
    $route() {
      this.moveToCurrentTag();
    }
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    closeSelectedTag(view) {
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
        });
    },
    toLastView(visitedViews, view) {
      const lastestView = visitedViews.slice(-1)[0];
      if (lastestView) this.$router.push(lastestView.fullPath);
      else {
        this.$router.push("/");
      }
    },
    handleScroll(offset) {
      this.$refs.scrollPane.handleScrollByArrow(offset);
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag);
            break;
          }
        }
      });
    },
    openMenu(tag, e) {},
    closeOthersTags() {},
    closeAllTags(view) {}
  }
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 40px;
  box-sizing: border-box;
  background: #fbfbfb;
  position: relative;
  padding: 0px 15px;
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 32px;
      line-height: 32px;
      background: #fff;
      color: #505050;
      padding: 0 8px;
      font-size: 12px;
      margin: 3px 0px 0px 5px;
      border: 1px solid #d8d8d8;
      &.active {
        background: #5ab5ab;
        color: #fff;
        border-color: #5ab5ab;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 6px;
          height: 6px;
          position: relative;
          margin-right: 2px;
        }
      }
    }
    .el-icon-close {
      &:hover {
        background: #c2c2c2;
      }
    }
  }
  .left-button {
    position: absolute;
    line-height: 40px;
    top: 0px;
    left: 0px;
  }
  .right-button {
    position: absolute;
    line-height: 40px;
    top: 0px;
    right: 0px;
  }
}
</style>
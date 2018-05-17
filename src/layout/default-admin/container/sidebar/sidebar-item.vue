<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template v-if="!item.children">
      <app-link :to="basePath">
        <el-menu-item :index="resolvePath(item.path)">
          <item :icon="item.meta.icon||(item.meta&&item.meta.icon)" :title="item.meta.title"/>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import Item from './item'
import AppLink from './link'

export default {
  name: 'SidebarItem',
  components: { Item,  AppLink },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    },

  },
  methods: {
    // 拼接路径
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <div class="logo-wrapper">
      <el-image :src="SiteLogo"></el-image>
      <span>{{ SiteName }}</span>
    </div>
    <el-scrollbar class="sidebar-wrapper">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./sidebar-item";
import SiteLogo from "@/assets/images/logo.png";

export default {
  data() {
    return {
      SiteName: "LDOS-CMS",
      SiteLogo: SiteLogo
    };
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters(["permission_routes", "sidebar"])
  }
};
</script>

<style scoped>
.logo-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 60px;
  width: 220px;
  background: #034545;
  overflow: hidden;
  z-index: 2;
}
.logo-wrapper span {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 140px;
  line-height: 60px;
  float: left;
  font-size: 14px;
  overflow: hidden;
  color: #e7e7e7;
}
.el-image {
  width: 60px;
  height: 40px;
  margin: 10px;
  float: left;
}

.sidebar-wrapper {
  top: 60px;
}
.el-menu-vertical-demo {
  border: 0px;
}
</style>
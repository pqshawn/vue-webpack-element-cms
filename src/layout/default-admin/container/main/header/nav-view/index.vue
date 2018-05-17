<template>
  <div class="nav-view">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    
    <breadcrumb class="breadcrumb-container"/>
    
    <div class="right-header">
        <el-dropdown>
            <div class="el-dropdown-link">
                <el-avatar icon="el-icon-user-solid"></el-avatar>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item>My Orders</el-dropdown-item>
                <el-dropdown-item>My Articles</el-dropdown-item>
                <el-dropdown-item disabled>User</el-dropdown-item>
                <el-dropdown-item divided>Logout</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hamburger from "@/components/hamburger";
import Breadcrumb from "@/components/breadcrumb";

export default {
  components: {
    Hamburger,
    Breadcrumb
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  }
};
</script>

<style lang="scss" scoped>
.nav-view {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 55px;
    height: 100%;
    float: left;
    cursor: pointer;

  }
  .breadcrumb-container {
    line-height: 50px;
  }

  .right-header {
    float: right;
    height: 100%;
    line-height: 50px;

    .el-dropdown div{
      padding-top: 5px;
    }
  }
}

</style>

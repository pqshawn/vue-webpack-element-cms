<template>
  <div class="sites-list-fiter-wrapper">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="站点名称">
        <el-input v-model="formInline.siteName" placeholder="站点名称"></el-input>
      </el-form-item>
      <el-form-item label="站点状态">
        <el-select v-model="formInline.siteState" placeholder="站点状态">
          <el-option label="开启" value="1"></el-option>
          <el-option label="关闭" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="sites-list-filter-func">
      <SitesComponentsAddIn></SitesComponentsAddIn>
    </div>
  </div>
</template>
<script>
import SitesComponentsAddIn from "./add-in";

export default {
  components: {
    SitesComponentsAddIn
  },
  data() {
    return {
      formInline: {
        siteName: "",
        siteState: ""
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style scoped>
.sites-list-filter-func {
  padding-bottom: 10px;
}
</style>
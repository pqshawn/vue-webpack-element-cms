<template>
  <div class="sites-add-container">
    <el-button type="warning" @click="onAdd">新增</el-button>
    <el-dialog title="添加网站信息" :visible.sync="dialogAddVisible">
      <SitesComponentsEdit :ruleForm="dialogEditData" @resetFormData="resetFormData" />
    </el-dialog>
  </div>
</template>

<script>
import SitesComponentsEdit from "./edit";

export default {
  name: "SitesComponentsAddIn",
  data() {
    return {
      dialogAddVisible : false,
      dialogEditData: {
        siteId: "",
        siteName: "",
        siteFlag: "",
        siteAdmin: "",
        siteIsbn: "",
        siteDomain: "",
        siteState: false
      }
    }
  },
  
  components: {
    SitesComponentsEdit
  },
  methods: {
    resetFormData() {
      this.dialogEditData = Object.assign({}, {});
    },
    onAdd() {
      this.dialogAddVisible = true;
    }
  }
};
</script>

<style scoped>
</style>


<template>
  <div class="sites-edit-container">
    <el-dialog title="编辑网站信息" :visible.sync="dialogEditVisible">
      <SitesComponentsEdit :ruleForm="dialogEditData" @resetFormData="resetFormData"/>
    </el-dialog>
  </div>
</template>

<script>
import SitesComponentsEdit from "./edit";

export default {
  name: "SitesComponentsEditIn",
  components: {
    SitesComponentsEdit
  },
  props: {
    dialogEditVisible: Boolean,
    dialogEditData: Object
  },
  methods: {
      resetFormData() {
          this.$emit('resetEditFormData')
      }
  }
};
</script>

<style scoped>
</style>


<template>
  <div class="sites-add-container">
    <SitesComponentsEdit :ruleForm="dialogEditData" @resetFormData="resetFormData" />
  </div>
</template>

<script>
import SitesComponentsEdit from "./components/edit";

export default {
  name: "SitesAdd",
  data() {
    return {
      dialogEditVisible: false,
      dialogEditData: {
        siteId: "",
        siteName: "",
        siteFlag: "",
        siteAdmin: "",
        siteIsbn: "",
        siteDomain: "",
        siteState: false
      }
    };
  },
  components: {
    SitesComponentsEdit
  },
  methods: {
    resetFormData() {
      this.dialogEditData = Object.assign({}, {})
    }
  }
};
</script>

<style scoped>
.sites-add-container {
  width: 500px;
  padding: 20px;
}
</style>


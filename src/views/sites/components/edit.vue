<template>
  <div class="sites-edit-wrapper">
    <el-form
      :model="ruleForm"
      :rules="rules"
      width="30%"
      ref="ruleForm"
      label-width="100px"
      class="site-ruleForm"
    >
      <el-form-item label="网站ID" prop="siteId" v-show="showSiteId">
        <el-input v-model="ruleForm.siteId" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="网站名称" prop="siteName">
        <el-input v-model="ruleForm.siteName"></el-input>
      </el-form-item>
      <el-form-item label="网站标识" prop="siteFlag">
        <el-input v-model="ruleForm.siteFlag"></el-input>
      </el-form-item>
      <el-form-item label="网站负责人" prop="siteAdmin">
        <el-input v-model="ruleForm.siteAdmin"></el-input>
      </el-form-item>
      <el-form-item label="网站备案号" prop="siteIsbn">
        <el-input v-model="ruleForm.siteIsbn"></el-input>
      </el-form-item>
      <el-form-item label="网站域名" prop="siteDomain">
        <el-input v-model="ruleForm.siteDomain">
          <template slot="prepend">Http://</template>
        </el-input>
      </el-form-item>
      <el-form-item label="网站状态" prop="siteState">
        <el-switch v-model="ruleForm.siteState"></el-switch>
      </el-form-item>
      <el-form-item label="修改时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "SitesComponentsEdit",
  props: {
    ruleForm: Object
  },
  data() {
    return {
      rules: {
        siteName: [
          { required: true, message: "请输入网站名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        siteFlag: [
          { required: true, message: "请输入网站标识", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur"
          },
          {
            pattern: /^[a-z0-9_]+$/,
            message: "只可以输入小写英文字母、数字和下划线三者的任意组合"
          }
        ],
        siteAdmin: [
          { required: true, message: "请输入网站负责人", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        siteIsbn: [
          { min: 0, max: 50, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {
    showSiteId() {
      let isShow = this.ruleForm.siteId ? true : false;
      return isShow;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          
        }
      });
    },
    resetForm(formName) {
      this.$emit("resetFormData");
    }
  }
};
</script>

<style scoped>
.sites-edit-wrapper {
  padding: 20px;
}
</style>
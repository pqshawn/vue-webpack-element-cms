<template>
  <div class="sites-list-container">
    <sites-filter></sites-filter>
    <div class="sites-list-wrapper">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="站点名称" width="180">
          <template slot-scope="scope">
            <i class="el-icon-headset"></i>
            <span style="margin-left: 10px">{{ scope.row.siteName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="siteFlag" label="站点标识" width="150"></el-table-column>
        <el-table-column prop="siteAdmin" label="站点负责人" width="100"></el-table-column>
        <el-table-column prop="siteIsbn" label="站点备案号" width="180"></el-table-column>
        <el-table-column label="站点域名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>顶级域名: {{ scope.row.siteDomain}}</p>
              <p>二级域名: {{ scope.row.siteDomain}}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.siteDomain}}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="站点状态" width="100">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.siteState" disabled></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <SitesComponentsEditIn
      :dialogEditVisible="dialogEditVisible"
      :dialogEditData="dialogEditData"
      @resetEditFormData="resetEditFormData"
    ></SitesComponentsEditIn>
    <pagination></pagination>
  </div>
</template>

<script>
import SitesFilter from "./components/filter";
import SitesComponentsEditIn from "./components/edit-in";
import Pagination from '@/components/pagination'

export default {
  name: "SitesList",
  components: {
    SitesFilter,
    SitesComponentsEditIn,
    Pagination
  },
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
      },
      
      tableData: [
        {
          siteId: "1",
          siteName: "后台（系统默认）",
          siteFlag: "default-admin",
          siteAdmin: "张三",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "LDOS.net",
          siteState: true
        },
        {
          siteId: "2",
          siteName: "门户",
          siteFlag: "default-admin",
          siteAdmin: "李四",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "LDOS.net",
          siteState: false
        },
        {
          siteId: "3",
          siteName: "导流",
          siteFlag: "default-admin",
          siteAdmin: "张三",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        },
        {
          siteId: "4",
          siteName: "文章博客",
          siteFlag: "default-admin",
          siteAdmin: "王五",
          siteIsbn: "沪ICP备15000271号",
          siteDomain: "dodony.com",
          siteState: true
        }
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      this.dialogEditData = Object.assign({}, row)
      this.dialogEditVisible = true;
    },
    resetEditFormData() {
      this.dialogEditData = Object.assign({}, {})
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped>
.sites-list-fiter-wrapper {
  background: #ffffff;
  padding: 20px 10px 0px;
}
.sites-list-wrapper {
  margin-top: 20px;
  background: #ffffff;
}
.el-pagination {
  margin-top: 30px;
}
</style>

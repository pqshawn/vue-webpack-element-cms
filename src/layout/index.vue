<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <IndexContainer></IndexContainer>
      </div>
    </el-col>
  </el-row>
</template>
<script>
/**
 * 默认后台的整体布局
 * 我们采用一行一列，直接在一列里放入布局容器
 */

import IndexContainer from "./default-admin/container/index-container";

export default {
  name: 'Layout',
  
  components: {
    IndexContainer
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 0px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #ffffff;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
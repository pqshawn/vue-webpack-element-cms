<template>
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-container>
            <el-aside></el-aside>
            <el-container>
              <el-header></el-header>
              <el-main>
                <el-row>
                  <el-button>默认按钮</el-button>
                  <el-button type="primary">主要按钮</el-button>
                  <el-button type="success">成功按钮</el-button>
                  <el-button type="info">信息按钮</el-button>
                  <el-button type="warning">警告按钮</el-button>
                  <el-button type="danger">危险按钮</el-button>
                </el-row>

                <el-row>
                  <el-button plain>朴素按钮</el-button>
                  <el-button type="primary" plain>主要按钮</el-button>
                  <el-button type="success" plain>成功按钮</el-button>
                  <el-button type="info" plain>信息按钮</el-button>
                  <el-button type="warning" plain>警告按钮</el-button>
                  <el-button type="danger" plain>危险按钮</el-button>
                </el-row>

                <el-row>
                  <el-button round>圆角按钮</el-button>
                  <el-button type="primary" round>主要按钮</el-button>
                  <el-button type="success" round>成功按钮</el-button>
                  <el-button type="info" round>信息按钮</el-button>
                  <el-button type="warning" round>警告按钮</el-button>
                  <el-button type="danger" round>危险按钮</el-button>
                </el-row>

                <el-row>
                  <el-button icon="el-icon-search" circle></el-button>
                  <el-button type="primary" icon="el-icon-edit" circle></el-button>
                  <el-button type="success" icon="el-icon-check" circle></el-button>
                  <el-button type="info" icon="el-icon-message" circle></el-button>
                  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-row>
              </el-main>
              <el-footer></el-footer>
            </el-container>
          </el-container>
        </div>
      </el-col>
    </el-row>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
}

.el-container {
  background: #e3e3e3;
}
.el-aside {
  background: #333;
  height: 500px;
}
.el-footer {
  background: red;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
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
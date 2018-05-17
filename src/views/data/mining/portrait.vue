<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2018-05-02",
          name: "小明用户肖像",
          address: "上海市淮海中路1888号"
        },
        {
          date: "2018-05-02",
          name: "小明用户肖像",
          address: "上海市淮海中路1888号"
        },
        {
          date: "2018-05-02",
          name: "小明用户肖像",
          address: "上海市淮海中路1888号"
        }
      ]
    };
  }
};
</script>
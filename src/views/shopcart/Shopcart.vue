<template>
  <div id="shopcart">
    <nav-bar class="shopcart-nav"><div slot="center">购物车</div></nav-bar>
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
export default {
  name: "",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      loading: true,
    };
  },
  components: { NavBar },
  mounted() {},
  methods: {},
};
</script>

<style>
.shopcart-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
</style>
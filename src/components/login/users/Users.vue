<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card class="box-card">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-input placeholder="请输入内容" class="input-with-select">
            <template #append>
              <el-button icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">主要按钮</el-button>
        </el-col>
      </el-row>

      <el-table :data="usersList" stripe border>
        <el-table-column type="index" label="#" width="50"> </el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="mobile" label="手机号"></el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="role_name" label="角色"> </el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="scope">
            <!-- 获取整行dome数据 -->
            <!-- {{ scope.row }} -->
            <el-switch v-model="scope.row.mg_state"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width='180'>
          <template slot-scope="">
            <!-- {{ scope.row }} -->
            <el-button type="primary" icon="el-icon-edit" circle size='mini'></el-button>
            <el-button type="danger" icon="el-icon-delete" circle size='mini'></el-button>
            <el-tooltip effect="dark" content="分配角色" placement="top" :enterable='false'>
            <el-button type="warning" icon="el-icon-setting" circle size='mini'> </el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

       <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 2,
      },
      usersList: [],
      total: 2,
    };
  },
  components: {},
  mounted() {},
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.get("users", {
        params: this.queryInfo,
      });
      // console.log(res);
      if (res.meta.status !== 200)
        return this.$message.error("获取用户列表失败");
      this.usersList = res.data.users;
      this.tolal = res.data.tolal;
    },
      handleSizeChange(val) {
        // 
        this.queryInfo.pagesize = val
        this.getUserList();
      },
      handleCurrentChange(val) {
        this.queryInfo.pagenum = val
        // console.log(`当前页: ${val}`);
      }
  },
  created() {
    this.getUserList();
  },
};
</script>

<style>
.box-card {
  width: 1050px;
  margin-top: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.el-breadcrumb {
  width: 450px;
}
.el-table {
  margin-top: 15px;
  font-size: 12px;
}
</style>
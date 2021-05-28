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
            <el-switch v-model="scope.row.mg_state" @change='userStateChanged(scope.row)'> </el-switch>
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
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 2,
      },
      usersList: [],
      total: 2,
    };
  },
  components: {},
  mounted() {},
  methods: {
    // 获取用户信息
    async getUserList() {
      const { data: res } = await this.$http.get("users", 
    // 对象参数
      { params: this.queryInfo,});


      if (res.meta.status !== 200)
        return this.$message.error("获取用户列表失败");
      this.usersList = res.data.users;
      this.total = res.data.total;
    },
    // 监听pagesize改变的事件
      handleSizeChange(val) {
        this.queryInfo.pagesize = val
        this.getUserList();
      },
      // 监听pagenum改变事件
      handleCurrentChange(val) {
        this.queryInfo.pagenum = val
        this.getUserList();
      },
    // 监听switch状态改变
    async userStateChanged(userInfo){
    // 修改用户状态
    const {data:res}= await this.$http.put(`users/${userInfo.id}/state/${userInfo.mg_state}`)
    // 判断状态码是否修改成功
    if(res.meta.status !== 200){
      userInfo.mg_state = !userInfo.mg_state
      this.$message.error('更新用户状态失败')
    }
      this.$message.success('更新用户状态成功')
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
.el-pagination{
  margin-top: 20px;
}
</style>
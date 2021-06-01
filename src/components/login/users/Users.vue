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
          <el-input
            v-model="queryInfo.query"
            placeholder="请输入内容"
            class="input-with-select"
            clearable
            @clear="getUserList"
          >
            <template #append>
              <el-button @click="getUserList" icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogVisible = true"
            >添加用户</el-button
          >
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
            <el-switch
              v-model="scope.row.mg_state"
              @change="userStateChanged(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <!-- {{ scope.row }} -->
            <el-button
              @click="showEditDialog(scope.row.id)"
              type="primary"
              icon="el-icon-edit"
              circle
              size="mini"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              @click="deltUser(scope.row.id)"
            ></el-button>
            <el-tooltip
              effect="dark"
              content="分配角色"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="warning"
                icon="el-icon-setting"
                circle
                size="mini"
              >
              </el-button>
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
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 添加用户弹出对话框 -->
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="50%"
      @close="dialogClosed"
    >
      <span>
        <el-form
          ref="loginFormRef"
          size="mini"
          :rules="rules"
          :model="addForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名称" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>
          <el-form-item label="用户邮箱" prop="email">
            <el-input v-model="addForm.email"></el-input>
          </el-form-item>
          <el-form-item label="用户手机" prop="mobile">
            <el-input v-model="addForm.mobile"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
        <el-button type="info" @click="resetForm">重 置</el-button>
      </span>
    </el-dialog>

    <!--修改用户对话框 -->
    <el-dialog
      title="修改用户"
      :visible.sync="editDialogVisible"
      width="50%"
      @close="editClosed"
    >
      <span>
        <el-form
          :model="editForm"
          :rules="rules"
          ref="editFormRef"
          label-width="100px"
        >
          <el-form-item label="用户名">
            <el-input v-model="editForm.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="editForm.email"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="mobile">
            <el-input v-model="editForm.mobile"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editModified">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^1[3|4|5|7|8|9][0-9]{9}$/;

      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("请输入正确的手机号"));
    };
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
      dialogVisible: false,
      editDialogVisible: false,
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      // 查询到的用户信息对象
      editForm: {},
      rules: {
        username: {
          required: true,
          message: "请输入姓名",
          // 可以单个或者同时写两个触发验证方式
          trigger: ["change", "blur"],
        },
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到  10个字符",
            trigger: "blur",
          },
        ],
      },
      editRules: {},
    };
  },
  components: {},
  mounted() {},
  methods: {
    // 获取用户信息
    async getUserList() {
      const { data: res } = await this.$http.get(
        "users",
        // 对象参数
        { params: this.queryInfo }
      );

      if (res.meta.status !== 200)
        return this.$message.error("获取用户列表失败");
      this.usersList = res.data.users;
      this.total = res.data.total;
    },
    // 监听pagesize改变的事件
    handleSizeChange(val) {
      this.queryInfo.pagesize = val;
      this.getUserList();
    },
    // 监听pagenum改变事件
    handleCurrentChange(val) {
      this.queryInfo.pagenum = val;
      this.getUserList();
    },
    // 监听switch状态改变
    async userStateChanged(userInfo) {
      // 修改用户状态
      const { data: res } = await this.$http.put(
        `users/${userInfo.id}/state/${userInfo.mg_state}`
      );
      // 判断状态码是否修改成功
      if (res.meta.status !== 200) {
        userInfo.mg_state = !userInfo.mg_state;
        this.$message.error("更新用户状态失败");
      }
      this.$message.success("更新用户状态成功");
    },
    // 重置添加用户表单
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 添加用户
    addUser() {
      this.$refs.loginFormRef.validate(async (valid) => {
        // console.log(valid);
        if (!valid) return;
        const { data: res } = await this.$http.post("users", this.addForm);
        // 判断状态码
        if (res.meta.status !== 201) this.$message.error("添加用户失败");
        this.$message.success("添加用户成功");
        // 隐藏对话框
        this.dialogVisible = false;
        //重新获取用户列表
        this.getUserList;
      });
    },
    // 退出对话框取消验证规则
    dialogClosed() {
      this.$refs.loginFormRef.resetFields();
    },
    // 根据id获取用户信息
    async showEditDialog(id) {
      console.log(id);
      this.editDialogVisible = true;
      const { data: res } = await this.$http.get("users/" + id);
      if (res.meta.status !== 200) return console.log(res.data);
      this.editForm = res.data;
    },
    // 修改成功
    editModified() {
      this.editDialogVisible = false;

      this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return;
        // 修改用户信息的请求
        const { data: res } = await this.$http.put(
          "users/" + this.editForm.id,
          { email: this.editForm.email, mobile: this.editForm.mobile }
        );
        if (res.meta.status !== 200) return this.$message.error("更新用户失败");
        this.$message.success("更新用户成功");
        this.getUserList();
      });
    },
    // 退出对话框取消验证规则
    editClosed() {
      this.$refs.editFormRef.resetFields();
    },
    // 删除单个用户
    async deltUser(id) {
      const { data: res } = await this.$http.delete("users/" + id);
      if (res.meta.status !== 200) return this.$message.error("删除失败 ");
      this.$message.success("删除成功");
      this.getUserList();
    },
  },
  // 组件加载成功回调函数
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
.el-pagination {
  margin-top: 20px;
}
</style>
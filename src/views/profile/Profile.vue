<template>
  <div id="profile">
    <nav-bar class="profilr-nav">
      <div slot="center">我的</div>
    </nav-bar>
    <div>
      <div class="login_box">
        <el-form
          ref="loginFormRef"
          size="mini"
          :rules="rules"
          :model="loginForm"
          class="login_form"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              prefix-icon="iconfont icon-user"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              prefix-icon="iconfont icon-3702mima"
            ></el-input>
          </el-form-item>

          <el-form-item class="login_but">
            <el-button type="primary" @click="submitForm">登录</el-button>
            <el-button type="info" @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { gethomemultidata } from "network/home";
import NavBar from "components/common/NavBar";
export default {
  name: "",
  data() {
    return {
      // 数据绑定
      loginForm: {
        username: "",
        password: "",
      },
      // 表单验证规则
      rules: {
        username: {
          required: true,
          message: "请输入姓名",
          // 可以单个或者同时写两个触发验证方式
          trigger: ["change", "blur"],
        },
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
    };
  },
  components: { NavBar },
  methods: {
    // 提交表单
    submitForm() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (valid) {
          const { data: res } = await this.$http.post("login", this.loginForm);
          if (res.meta.status !== 200) {
            this.$message.error('登录失败');
          } else {
            this.$message({
              message: "登录成功",
              type: "success",
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置登录表单
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    },
  },
};
</script>

<style>
#profile {
  width: 100%;
  height: 667px;
  background-color: #4b6584;
}
.profilr-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
.login_box {
  width: 300px;
  height: 200px;
  background-color: #fff;
  margin: 150px auto;
  position: relative;
}
.login_form {
  position: absolute;
  bottom: 25px;
  width: 100%;
  padding: 0px 10px;
}
.login_but {
  /* 弹性盒子 */
  display: flex;
  /* 居右对其 */
  justify-content: flex-end;
}
</style>
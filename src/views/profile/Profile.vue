<template>
  <div id="profile">
    <nav-bar class="profilr-nav">
      <div slot="center">我的</div>
    </nav-bar>
    <div>
      <div class="login_box">
        <el-form size="mini" class="login_form">
          <el-form-item>
            <el-input prefix-icon="iconfont icon-user"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input prefix-icon="iconfont icon-3702mima"></el-input>
          </el-form-item>
          <el-form-item class="login_but">
            <el-button type="primary">登录</el-button>
            <el-button type="info">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
export default {
  name: "",
  data() {
    return {};
  },
  components: { NavBar },
  mounted() {},
  methods: {},
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
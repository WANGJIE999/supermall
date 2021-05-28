<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>

    <el-container class="home-container">
      <!-- 头部 -->
      <el-header>
        <div class="title-header">
          <img src="~assets/images/home/heima.png" alt="" />
          <span>后台管理项目系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="iscollapse ? '64px' : '200px'">
          <div class="toggle-button" @click="butcollapse">|||</div>

          <el-menu
            background-color="#333744"
            text-color="#fff"
            unique-opened
            :collapse="iscollapse"
            :collapse-transition="false"
            router
          >
            <!-- 一级菜单 -->
            <el-submenu
              v-for="item in MenuList"
              :key="item.id"
              :index="item.id + ''"
            >
              <template slot="title">
                <i :class="iconList[item.id]"></i>
                <span>{{ item.authName }}</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item
                v-for="subItem in item.children"
                :key="subItem.id"
                :index="'/' + subItem.path"
              >
                <i class="el-icon-menu"></i>
                {{ subItem.authName }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主页内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
export default {
  name: "",
  data() {
    return {
      MenuList: [],
      iconList: {
        125: "iconfont icon-user",
        103: "iconfont icon-tijikongjian",
        101: "iconfont icon-shangpin",
        102: "iconfont icon-danju",
        145: "iconfont icon-baobiao",
      },
      iscollapse: false,
    };
  },
  components: { NavBar },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/profile");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.MenuList = res.data;
      // console.log(res);
    },
    butcollapse() {
      this.iscollapse = !this.iscollapse;
    },
  },
  created() {
    this.getMenuList();
  },
};
</script>

<style>
.toggle-button {
  /* 鼠标手指 */
  cursor: pointer;
  line-height: 24px;
  letter-spacing: 0.2em;
  font-size: 10px;
  text-align: center;
  color: #fff;
  background-color: #4a5064;
}
.home-container {
  height: 640px;
}
.el-header {
  width: 100%;
  background-color: #373d41;
  color: #fff;
  display: flex;
  /* 左右贴边 */
  justify-content: space-between;
  padding-left: 0px;
  /* button 居中 */
  align-items: center;
  font-size: 20px;
}
.title-header {
  /* 文本对齐 */
  display: flex;
  align-items: center;
}
.title-header span {
  margin-left: 15px;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  width: 100%;
  background-color: #eaedf1;
}
.home-nav {
  width: 100%;
  background-color: rgb(211, 94, 94);
  color: #fff;
}
.el-submenu {
  width: 200px;
}
</style>
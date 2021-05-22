<template>
  <div>
    <nav-bar class="shopcart-nav"><div slot="center">我的</div></nav-bar>
    <el-button type="info" @click="logout">退出</el-button>
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
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/profile");
    },
  },
};
</script>

<style>
</style>
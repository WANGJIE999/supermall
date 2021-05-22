<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
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
  methods: {},
  created() {},
};
</script>

<style>
.home-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
</style>
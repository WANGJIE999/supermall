<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import { gethomemultidata } from "network/home";
import NavBar from "components/common/NavBar";
export default {
  name: "",
  data() {
    return {};
  },
  components: { NavBar },
  methods: {},
  created() {
    gethomemultidata().then((res) => {
      console.log(res);
      this.banners = res;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
</style>
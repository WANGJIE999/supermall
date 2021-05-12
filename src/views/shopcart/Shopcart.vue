<template>
  <div id="shopcart">
    <nav-bar class="shopcart-nav"><div slot="center">购物车</div></nav-bar>
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
.shopcart-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
</style>
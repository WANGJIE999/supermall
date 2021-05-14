<template>
  <div id="shopcart">
    <nav-bar class="shopcart-nav"><div slot="center">购物车</div></nav-bar>
    <div class="block"></div>
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.imgs img {
  width: 375px;
  height: 194px;
}
</style>
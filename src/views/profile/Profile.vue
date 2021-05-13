<template>
  <div id="profile">
    <nav-bar class="profilr-nav">
      <div slot="center">我的</div>
    </nav-bar>
    <el-carousel class="elel" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
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
.profilr-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
.el-carousel__container {
  height: 130px;
}
.el-carousel__item h3 {
  height: 130px;
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 130px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
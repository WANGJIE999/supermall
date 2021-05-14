<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { gethomemultidata } from "network/home";
import NavBar from "components/common/NavBar";
export default {
  name: "",
  data() {
    return {
      images: [
        "assets/images/home/index_ad1.jpg",
        "assets/images/home/index_ad2.jpg",
        "assets/images/home/index_ad3.jpg",
        "assets/images/home/index_ad4.jpg",
      ],
    };
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
.my-swipe img {
  width: 375px;
  height: 177px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
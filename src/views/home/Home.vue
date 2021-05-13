<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Carousel v-model="value1" loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="~assets/images/home/index_ad1.jpg" alt="" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="~assets/images/home/index_ad2.jpg" alt="" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="~assets/images/home/index_ad3.jpg" alt="" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="~assets/images/home/index_ad4.jpg" alt="" />
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import { gethomemultidata } from "network/home";
import NavBar from "components/common/NavBar";
export default {
  name: "",
  data() {
    return {
      banners: [],
      value1: 0,
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
.demo-carousel img {
  width: 375px;
  height: 177px;
}
</style>
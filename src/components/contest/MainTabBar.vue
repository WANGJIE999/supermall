<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <slot slot="tab-bar"
          ><img src="~assets/images/tabbar/home.svg" alt=""
        /></slot>
        <slot slot="tab-item"
          ><img src="~assets/images/tabbar/home_active.svg" alt=""
        /></slot>
        <slot slot="tab-text">首页</slot>
      </tab-bar-item>
      <tab-bar-item path="special">
        <slot slot="tab-bar"
          ><img src="~assets/images/tabbar/profile.svg" alt=""
        /></slot>
        <slot slot="tab-item"
          ><img src="~assets/images/tabbar/profile_active.svg" alt=""
        /></slot>
        <slot slot="tab-text">专题</slot>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <slot slot="tab-bar"
          ><img src="~assets/images/tabbar/category.svg" alt=""
        /></slot>
        <slot slot="tab-item"
          ><img src="~assets/images/tabbar/category_active.svg" alt=""
        /></slot>
        <slot slot="tab-text">分类</slot>
      </tab-bar-item>
      <tab-bar-item path="shopcart">
        <slot slot="tab-bar"
          ><img src="~assets/images/tabbar/shopcart.svg" alt=""
        /></slot>
        <slot slot="tab-item"
          ><img src="~assets/images/tabbar/shopcart_active.svg" alt=""
        /></slot>
        <slot slot="tab-text">购物车</slot>
      </tab-bar-item>
      <tab-bar-item path="my">
        <slot slot="tab-bar"
          ><img src="~assets/images/tabbar/profile.svg" alt=""
        /></slot>
        <slot slot="tab-item"
          ><img src="~assets/images/tabbar/profile_active.svg" alt=""
        /></slot>
        <slot slot="tab-text">我的</slot>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar.vue";
import TabBarItem from "components/common/TabBarItem.vue";
import NavBar from "components/common/NavBar";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: { TabBar, TabBarItem, NavBar },
  mounted() {},
  methods: {},
};
</script>

<style>
.home-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
</style>
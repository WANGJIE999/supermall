<template>
  <div class="catergory">
    <nav-bar class="catergory-nav"><div slot="center">分类</div></nav-bar>

    <div></div>
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
.catergory-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
</style>
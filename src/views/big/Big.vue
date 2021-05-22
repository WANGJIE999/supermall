<template>
  <div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/contest/MainTabBar.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: { MainTabBar },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
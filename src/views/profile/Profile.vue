<template>
  <div id="profile">
    <nav-bar class="profilr-nav">
      <div slot="center">我的</div>
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
  mounted() {},
  methods: {},
};
</script>

<style>
.profilr-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
</style>
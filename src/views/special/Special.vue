<template >
  <div class="special">
    <nav-bar class="Spercial-nav">
      <div slot="center">专题</div>
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
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style>
.Spercial-nav {
  background-color: rgb(238, 143, 159);
  color: #fff;
}
</style>
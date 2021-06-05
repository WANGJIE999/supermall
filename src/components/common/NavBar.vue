<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style>
.nav-bar {
  display: flex;
  height: 30px;
  line-height: 30px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>
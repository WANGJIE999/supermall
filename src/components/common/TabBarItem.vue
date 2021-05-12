<template>
  <div class="tab-bar-item" @click="itemclick">
    <slot v-if="!issactive" name="tab-bar"></slot>
    <slot v-else name="tab-item"></slot>

    <div :style="isstyleactive">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
    },
    actived: {
      type: String,
      //   默认值
      defolt: "red",
    },
  },
  methods: {
    itemclick() {
      //活跃路由path赋值
      this.$router.replace(this.path);
    },
  },
  computed: {
    issactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isstyleactive() {
      this.issactive ? { color: this.actived } : {};
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color: black;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 4px 0 2px 0;
}

.actived {
  color: red;
  font-weight: bolder;
}
</style>
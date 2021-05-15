<template>
  <div class="special">
    <div class="loginform">
      <img src="~assets/images/home/index_ad1.jpg" alt="" />
      <div class="min">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <br />
          <FormItem prop="password">
            <Input
              type="password"
              v-model="formInline.password"
              placeholder="Password"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input> </FormItem
          ><br />
          <FormItem class="dddd">
            <Button type="primary" @click="handleSubmit('formInline')"
              >Signin</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  mounted() {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>

<style>
.special {
  margin: 0 auto;
}
.loginform {
  margin: 200px auto;
  width: 530px;
  height: 300px;
  border: 1px solid #bfa;
  /* background-image: url("~assets/images/home/index_ad1.jpg"); */
}
.min {
  width: 200px;
  height: 120px;
  margin: 50px auto;
}
.loginform img {
  position: absolute;
  width: 530px;
  height: 300px;
}
</style>
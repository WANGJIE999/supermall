<template >
  <div class="special">
    <div class="loginform">
      <!-- <img src="~assets/images/home/index_ad1.jpg" alt="" /> -->
      <div class="min">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="username">
            <Input
              type="text"
              v-model="formInline.username"
              placeholder="Username"
            >
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
            <Button
              type="primary"
              @click="handleReset('formInline')"
              style="margin-left: 18px"
              >Reset</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { gethomemultidata } from "network/home";

export default {
  name: "",
  data() {
    return {
      formInline: {
        username: "admin",
        password: "123456",
      },
      ruleInline: {
        username: [
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
            message: "最少6位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    handleReset(name) {
      this.$refs[name].resetFields();
    },

    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          gethomemultidata().then((res) => {
            console.log(res);
            //判断登录是否成功
            if (res.meta.status !== 200) return this.$Message.error("登录失败");
            this.$Message.success("登录成功");
          });
        }
        return false;
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
  /* background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%); */
  /* box-shadow: 0px 1px 1px 1px rgba(194, 191, 191, 0.5); */
}
.min {
  width: 200px;
  height: 120px;
  padding: 50px 0px 0px 0px;
  margin: 20px auto;
}
.loginform img {
  position: absolute;
  width: 530px;
  height: 300px;
}
</style>
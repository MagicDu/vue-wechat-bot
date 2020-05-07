<template>
  <div class="login_form">
    <van-form @submit="onSubmit">
      <van-image round class="logo" :src="logoImg" />
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" :disabled="disabled">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import logoImg from "@/assets/logo.png";

export default {
  data() {
    return {
      logoImg: logoImg,
      disabled: false,
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      this.disabled = true;
      this.$store
        .dispatch("user/login", values)
        .then(() => {
          this.$router.push("/chats");
          this.$store.dispatch("websocket/STAFF_WEBSOCKET");
          this.disabled = false;
        })
        .catch(() => {
          this.disabled = false;
        });
    }
  }
};
</script>

<style scoped>
.login_form {
  padding: 150px 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
.logo {
  padding-bottom: 5px;
  height: 100px;
  margin: 0 auto;
  width: 100px;
  display: block;
}
</style>>


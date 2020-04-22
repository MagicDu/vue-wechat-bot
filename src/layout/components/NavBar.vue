<template>
  <div id="NavBar">
    <van-nav-bar :title="title" :left-arrow="isleftarrow" @click-left="onClickLeft" />
  </div>
</template>
<script>
export default {
  name:"NavBar",
  props: ["title", "isleftarrow"],
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
#NavBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 46px;
  line-height: 46px;
  width:100%;
  z-index: 100;
}
.van-nav-bar{
  color: white;
  font-size: 18px!important;
  background: rgb(247, 247, 247);
  /* 设置导航栏的渐变色 */
  /* background: linear-gradient(to right, #000, #1b0e0b)!important;
  background: -webkit-linear-gradient(to right, #ff2e29, #fe6e49)!important; */
  border:0;
}
.van-hairline--bottom::after {
     /* 去除导航栏底部的白色横线 */
    border-bottom-width: 0px!important;
}
</style>
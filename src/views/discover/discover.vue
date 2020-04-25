<template>
  <van-list v-model="loading" :finished="finished" finished-text="" @load="onLoad">
    <!-- <van-cell title="朋友圈" :icon="momentsImg" size="large" /> -->
    <MyVantCell
    :iconSrc="momentsImg"
    :isMsg="false"
    :isLink="true"
    content_title="朋友圈"
    />
    <MyVantCell
    :iconSrc="scanImage"
    :isMsg="false"
    :isLink="true"
    content_title="扫一扫"
    />
    <MyVantCell
    :iconSrc="shakeImage"
    :isMsg="false"
    :isLink="true"
    content_title="摇一摇"
    />
    <MyVantCell
    :iconSrc="findImage"
    :isMsg="false"
    :isLink="true"
    content_title="搜索"
    />
  </van-list>
</template>
<script>
import MyVantCell from '@/components/MyVantCell'
import momentsImg from '@/assets/images/find_icon-circle.png'
import scanImage from '@/assets/images/find_icon-qrcode.png'
import shakeImage from '@/assets/images/find_icon-shake.png'
import findImage from '@/assets/images/find_icon-moregame.png'
import avatarImage from '@/assets/images/user-b.png'

export default {
  data() {
    return {
      momentsImg:momentsImg,
      scanImage:scanImage,
      shakeImage:shakeImage,
      findImage:findImage,
      detail: "/detail",
      loading: false,
      finished: true,
      list:[
          {
            id:"1",
            nickname:"杨鱼儿",
            avatar:avatarImage,
          },
           {
            id:"2",
            nickname:"刘华",
            avatar:avatarImage,
          },
          {
            id:"3",
            nickname:"张素素",
            avatar:avatarImage,
          },
          {
            id:"4",
            nickname:"孙宝儿",
            avatar:avatarImage,
          },
           {
            id:"5",
            nickname:"刘希儿",
            avatar:avatarImage,
          },
          {
            id:"6",
            nickname:"草花儿",
            avatar:avatarImage,
          },
           {
            id:"6",
            nickname:"张程儿",
            avatar:avatarImage,
          }
      ]
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
    },
    toDetail(id){
      this.$router.push({path:'/chats/detail/'+id})
    }
  },
  components: {
    MyVantCell
  },
  created() {}
};
</script>
<style scoped>
</style>

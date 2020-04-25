<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <MyVantCell
    :iconSrc="addContactImg"
    :isMsg="false"
    content_title="新的朋友"
    />
    <MyVantCell
    :iconSrc="groupChatImage"
    :isMsg="false"
    content_title="群聊"
    />
    <MyVantCell
    :iconSrc="tagImage"
    :isMsg="false"
    content_title="标签"
    />
    <MyVantCell
    :iconSrc="officialImage"
    :isMsg="false"
    content_title="公众号"
    />
     <van-cell-group title="联系人">
    <MyVantCell v-for="item in list" :key="item.id" 
    :isMsg="false"
    :iconSrc="item.avatar"
    :content_title="item.nickname"
    />
     </van-cell-group>
  </van-list>
</template>
<script>
import MyVantCell from '@/components/MyVantCell'
import addContactImg from '@/assets/images/contact_top-friend-notify.png'
import groupChatImage from '@/assets/images/contact_top-addgroup.png'
import tagImage from '@/assets/images/contact_top-tag.png'
import officialImage from '@/assets/images/contact_top-offical.png'
import avatarImage from '@/assets/images/ava-d.jpeg'

export default {
  data() {
    return {
      addContactImg:addContactImg,
      groupChatImage:groupChatImage,
      tagImage:tagImage,
      officialImage:officialImage,
      detail: "/detail",
      loading: false,
      finished: false,
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

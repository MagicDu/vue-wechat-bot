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
  </van-list>
</template>
<script>
import MyVantCell from '@/components/MyVantCell'
import addContactImg from '@/assets/images/contact_top-friend-notify.png'
import groupChatImage from '@/assets/images/contact_top-addgroup.png'
import tagImage from '@/assets/images/contact_top-tag.png'
import officialImage from '@/assets/images/contact_top-offical.png'

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

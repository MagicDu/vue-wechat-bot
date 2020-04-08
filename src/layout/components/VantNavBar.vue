<template>
<div>
   <van-tabbar active-color="#07c160"
  inactive-color="#000" v-model="active">
     <van-tabbar-item v-for="item in index_nav" :key="item.index" :icon="item.iconClass" @click="dispatchTab(item.path)">{{item.text}}</van-tabbar-item> 
  </van-tabbar>
</div> 
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "VantNavBar",
  props: {},
  data() {
    return {
        active:1,
      index_nav: [
        {
          index: 0,
          path: {
            path: "/chats"
          },
          hint: { type: "count", count: 0 }, //count,dot
          iconClass: "chat-o",
          text: "微信"
        },
        {
          index: 1,
          path: {
            path: "/contacts"
          },

          hint: { type: "count", count: 0 },
          iconClass: "friends-o",
          text: "通讯录"
        },
        {
          index: 2,
          path: {
            path: "/discover"
          },
          hint: { type: "dot", count: 99 },
          iconClass: "fire-o",
          text: "发现"
        },
        {
          index: 3,
          path: {
            path: "/me"
          },
          hint: { type: null, count: "" },
          iconClass: "contact",
          text: "我"
        }
      ]
    };
  },

  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    get_prompt(hint) {
      return hint.count;
    },
    dispatchTab(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style scoped>
</style>

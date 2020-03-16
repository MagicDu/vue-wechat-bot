<template>
  <nav>
    <dl v-for="item in index_nav"  :key="item.index">
      <dt class="iconfont" :class="item.iconClass" @click="dispatchTab(item.path)">
        <i v-if="item.hint.count" v-text="item.hint | get_prompt " :class="'_news-'+item.hint.type"></i>
      </dt>
      <dd v-text="item.text"></dd>
    </dl>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name:"Navbar",
  props: {},
  data() {
    return {
      index_nav: [
        {
          index: 0,
          path: {
            path: "/chats"
          },
          hint: { type: "count", count: 0 }, //count,dot
          iconClass: "icon-wechat",
          text: "微信"
        },
        {
          index: 1,
          path: {
            path: "/contacts"
          },

          hint: { type: "count", count: 0 },
          iconClass: "icon-contact",
          text: "通讯录"
        },
        {
          index: 2,
          path: {
            path: "/discover"
          },
          hint: { type: "dot", count: 99 },
          iconClass: "icon-find",
          text: "发现"
        },
        {
          index: 3,
          path: {
            path: "/me"
          },
          hint: { type: null, count: "" },
          iconClass: "icon-me",
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
            return hint.count
        },
        dispatchTab(path){
         this.$router.push(path)
        }
  }
};
</script>
<style scoped>
nav {
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 50px;
  padding-top: 8px;
  background: #f9f9f9;
  font-size: 12px;
}

nav dl {
  user-select: none;
  -webkit-user-select: none;
  flex-grow: 1;
  text-align: center;
  line-height: 1;
}

nav dl.v-link-active dl,
nav dl.v-link-active dt {
  color: #0bb908;
}

nav dt {
  position: relative;
  width: 28px;
  height: 28px;
  margin: 0 auto;
  font-size: 28px;
  color: #797979;
  margin-bottom: 2px;
}

nav dd {
  color: #929292;
  transform-origin: 50% 0;
  transform: scale(0.9);
}

nav ._news-dot {
  right: -2px;
  top: -3px;
  width: 11px;
  height: 11px;
}
</style>

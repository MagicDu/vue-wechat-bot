<template>
  <div
    class="_full_inner _scroll _effect component-chat"
    :class="{ '_effect--30': decline }"
  >
    <!-- <search-bar></search-bar> -->
    <ul class="wechat-list">
      <li
        class="item _line-fine"
        v-for="item in wechat_list"
        :key="item.id"
        transition="chat-item"
      >
      <router-link :to="detail">
        <div
          class="info"
          :class="{
            current: currentIndex == $index
          }"
          v-touch-options:swipe="{ direction: 'horizontal' }"
        >
          <div class="ico-box">
            <i
              :class="item.chatConfigModel"
              :text="item.chatBaseModel"
              v-show="item.chatBaseModel"
            ></i>
            <div class="ico">
              <img :src="item.base.iconSrc" alt="pic" />
            </div>
          </div>
          <div class="desc">
            <div
              class="desc-time"
              v-text="item.chatBaseModel.endTimeStr"
            ></div>
            <div class="desc-title" v-text="item.base.name"></div>
            <div class="desc-message">
              <div
                class="desc-mute iconfont icon-mute"
                :title="item.chatConfigModel.newsMute | json"
                v-show="item.chatConfigModel.newsMute"
              ></div>
              <span
                :title="item.base.type"
                v-show="item.base.type === 'friends'"
                v-text="item.chatBaseModel.endChatAuth + ':'"
              ></span>
              <span v-text="item.chatBaseModel.endChatTxt"></span>
            </div>
          </div>
        </div>
        <div class="handle">
          <div
            class="handle-unread"
            v-show="item.chatBaseModel.newsUnreadCount == 0"
          >
            标为未读
          </div>
          <div
            class="handle-unread"
            v-show="item.chatBaseModel.newsUnreadCount > 0"
          >
            标为已读
          </div>
          <div class="handle-del">删除</div>
        </div>
         </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
// import searchBar from "components/search-bar.vue";

export default {
  data() {
    return {
      detail:"/detail",
      decline: false,
      currentIndex: -1, //列表item处在左划状态
      isTouchSwipe: false, //验证是否处于左划状态
      wechat_list: [
        {
          id:"1",
          base: {
            id: 1,
            name: "杨涛",
            nickname: "nick_杨涛",
            remark: "remark_杨涛",
            wxid: "wxid_yangtao",
            qq: "00001",
            email: "00001@qq.com",
            type: "friends",
            iconSrc:
              "//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
            qrCode: "",
            signature: "个性签名",
            telphone: 18812345678,
            area: ["中国", "北京", "海淀"],
            selfPhotos: [{ imgSrc: "" }]
          },
          //对话列表基本项
          chatBaseModel: {
            newsUnreadCount: 1,
            endTimeStr: 1472632586443,
            endChatAuth: "杨涛",
            endChatTxt: "晚上打球?"
          },
          //对话框底部菜单
          chatDialogueBarModel: {
            menu: []
          },
          chatDialogueModel: [],
          chatMemberModel: [
            {
              id: 1,
              iconSrc:
                "//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
              name: "杨涛",
              nickname: "nick_杨涛",
              remark: "remark_杨涛"
            }
          ],
          chatConfigModel: {
            isStick: false, //置顶
            newsMute: false, //消息免打扰
            starFriends: false, //标星
            lookMePhotos: true,
            lookHisPhotos: true,
            blacklist: false //"黑名单"
          }
        },
        {
           id:"2",
          base: {
            id: 2,
            name: "微信群01",
            nickname: "nick_微信群01",
            remark: "remark_微信群01",
            wxid: "wxid_group01",
            qq: "00002",
            email: null,
            type: "group",
            iconSrc:
              "//ad-gold-cdn.xitu.io/1499913766441c45960d8bd44ed5ffcf0d4a67d0aa317.jpg",

            qrCode: "",
            signature: "个性签名"
          },
          chatBaseModel: {
            newsUnreadCount: 1,
            endTimeStr: 1472632586443,
            endChatAuth: "领导",
            endChatTxt: "大家下班的时候记得锁好门"
          },
          //对话框底部菜单
          chatDialogueBarModel: {
            menu: []
          },
          chatDialogueModel: [],
          chatMemberModel: [
            {
              id: 1,
              iconSrc:
                "//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
              name: "yangtao01",
              nickname: "nick_微信群01",
              remark: "remark_微信群01"
            },
            {
              id: 1,
              iconSrc:
                "//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
              name: "yangtao02",
              nickname: "nick_微信群01",
              remark: "remark_微信群01"
            }
          ],
          chatConfigModel: {
            chatBackground: null, //背景
            groupNotice: "", //群公告
            isStick: false, //置顶
            newsMute: true, //消息免打扰
            contactsSave: false,
            showGroupNickname: true //显示群聊天昵称
          }
        },
        {
           id:"3",
          base: {
            id: 1,
            name: "稀土圈",
            nickname: "稀土圈",
            remark: "稀土圈",
            wxid: "iloveleme",
            qq: "00000",
            email: "000000@qq.com",
            type: "service",
            iconSrc:
              "//ad-gold-cdn.xitu.io/14999139497307c668d55b4dd5984b6accc6bf41206a8.jpg",
            qrCode: "",
            signature: "个性签名",
            telphone: 18812345678,
            area: ["中国", "北京", "海淀"],
            selfPhotos: [{ imgSrc: "" }]
          },
          //对话列表基本项
          chatBaseModel: {
            newsUnreadCount: 11,
            endTimeStr: 1472632586443,
            endChatAuth: "",
            endChatTxt: "挖掘最优质的互联网技术"
          },
          //对话框底部菜单
          chatDialogueBarModel: {
            menu: [
              {
                title: "翻译计划",
                url: "http://p.memoe.cn/",
                subMenu: []
              },
              {
                title: "绝密试卷",
                url: "http://p.memoe.cn/",
                subMenu: []
              },
              {
                title: "稀土掘金",
                url: "//gold.xitu.io",
                subMenu: []
              }
            ]
          },
          chatDialogueModel: [
            {
              id: 1,
              name: "稀土圈",
              nickname: "稀土圈",
              remark: "稀土圈",
              wxid: "wxid_jingdong",
              qq: "000021",
              email: "000021@qq.com",
              type: "service",
              iconSrc:
                "//ad-gold-cdn.xitu.io/14999139497307c668d55b4dd5984b6accc6bf41206a8.jpg",
              qrCode: "",
              signature: "个性签名",
              telphone: 18812345678,
              area: ["中国", "北京", "海淀"],
              selfPhotos: [{ imgSrc: "" }]
            }
          ],
          chatMemberModel: [],
          chatConfigModel: {
            isStick: false, //置顶
            newsMute: false, //消息免打扰
            starFriends: false, //标星
            lookMePhotos: true,
            lookHisPhotos: true,
            blacklist: false //"黑名单"
          }
        },
        {
           id:"4",
          base: {
            id: 1,
            name: "饿了么",
            nickname: "饿了么",
            remark: "饿了么",
            wxid: "iloveleme",
            qq: "00000",
            email: "000000@qq.com",
            type: "service",
            iconSrc: "//tb1.bdstatic.com/tb/cms/ngmis/file_1453447545023.jpg",
            qrCode: "",
            signature: "个性签名",
            telphone: 18812345678,
            area: ["中国", "北京", "海淀"],
            selfPhotos: [{ imgSrc: "" }]
          },
          //对话列表基本项
          chatBaseModel: {
            newsUnreadCount: 0,
            endTimeStr: 1472632586443,
            endChatAuth: "",
            endChatTxt: "饿了么网上订餐平台"
          },
          //对话框底部菜单
          chatDialogueBarModel: {
            menu: [
              {
                title: "我要订餐",
                url: "//m.ele.me/",
                subMenu: []
              },
              {
                title: "关注必读",
                url: "",
                subMenu: []
              },
              {
                title: "联系我们",
                url: "//m.ele.me/",
                subMenu: []
              }
            ]
          },
          chatDialogueModel: [
            {
              id: 1,
              name: "饿了么",
              nickname: "饿了么",
              remark: "饿了么",
              wxid: "iloveleme",
              qq: "00000",
              email: "00000@qq.com",
              type: "service",
              iconSrc: "",
              qrCode: "",
              signature: "个性签名",
              telphone: 18812345678,
              area: ["中国", "北京", "海淀"],
              selfPhotos: [{ imgSrc: "" }]
            }
          ],
          chatMemberModel: [],
          chatConfigModel: {
            isStick: false, //置顶
            newsMute: false, //消息免打扰
            starFriends: false, //标星
            lookMePhotos: true,
            lookHisPhotos: true,
            blacklist: false //"黑名单"
          }
        }
      ]
    };
  },
  events: {
    "route-pipe"(_decline) {
      this.decline = _decline;
      this.$parent.$emit("route-pipe", _decline);
    }
  },
  methods: {
    info_touchstart(_index) {
      console.log(_index)
      this.currentIndex = -1;
    },
    info_tap(_index) {
      var index = _index;
      if (index >= 0 && !this.isTouchSwipe) {
        this.set_chat(this.wechat_list[index]);
        this.$router.go({
          path: "/chat/dialogue"
        });
      }
      this.isTouchSwipe = false;
    },
    info_swipeleft(_index) {
      event.stopPropagation();
      if (!this.isTouchSwipe) {
        this.isTouchSwipe = true;
        this.currentIndex = _index;
      } else {
        this.isTouchSwipe = false;
      }
    },
    computed_unRead_count() {
      //计算未读数量
      let sum = 0;
      console.log(this.wechat_list);
      this.wechat_list.forEach(({ chatBaseModel, chatConfigModel }, index) => {
        console.log(index)
        if (!chatConfigModel.newsMute) {
          let count = chatBaseModel.newsUnreadCount;
          sum += count;
        }
      });
      this.set_chat_count(sum);
    },
    delete_item(index) {
      this.delete_news(index, () => {
        this.currentIndex = -1;
        this.computed_unRead_count();
      });
    }
  },
  filters: {
    f_news(obj, attr) {
      var aaa = obj || {};
      let newsClass = aaa.newsMute ? "_news-dot" : "_news-count";
      let newsText = !aaa.newsMute ? aaa.newsUnreadCount : "";
      let newsShow = aaa.newsUnreadCount > 0;
      let o = {
        nclass: newsClass,
        ntext: newsText,
        nshow: newsShow
      };
      return o[attr];
    }
  },
  components: {
    //searchBar
  },
  created() {
    // this.get_menu_wechat_list(() => {
    //   this.computed_unRead_count();
    // });
  }
};
</script>
<style scoped></style>

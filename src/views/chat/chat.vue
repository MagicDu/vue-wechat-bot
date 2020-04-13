<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="item in list" :key="item.id" size="large" @click="toDetail(item.id)">
      <template #title>
        <div class="chat-right">
          <div>
            <img :src="item.base.iconSrc" class="avatar" />
          </div>
          <div class="content-right">
            <div class="content-time-wrap">
              <div class="content-title">{{item.base.name}}</div>
              <div class="content-time">{{item.chatBaseModel.endTimeStr|formatDate}}</div>
            </div>
            <div class="content-tip">{{item.chatBaseModel.endChatTxt}}</div>
          </div>
        </div>
      </template>
    </van-cell>
  </van-list>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      detail: "/detail",
      loading: false,
      finished: true,
      list: [
        {
          id: "1",
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
            endTimeStr: 1586594186000,
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
          id: "2",
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
            endTimeStr: 1586766986000,
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
          id: "3",
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
            endTimeStr: 1586766986000,
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
          id: "4",
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
  events: {},
  filters: {
    formatDate(value) {
      let now = moment();
      let past=moment(value)
      let diff = now.diff(past, 'days')
      if(diff==0){
          return past.format('HH:mm')
      }
      if(diff>=1&&diff<=3){
          return diff+'天前'
      }
     if(diff>3){
        return past.format('MM/DD/YY')
     }
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
    },
    toDetail(id){
      this.$router.push({path:'/detail/'+id})
    }
  },
  components: {},
  created() {}
};
</script>
<style scoped>
.avatar {
  border-radius: 5px;
  height: 45px;
  widows: 45px;
}
.chat-right {
  display: flex;
  flex-direction: row;
}
.content-right {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 15px;
}
.content-title {
  font-size: 20px;
  font-family: "Microsoft YaHei";
}
.content-tip {
  color: darkgrey;
}
.content-time {
  color: darkgrey;
}
.content-time-wrap{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
	position: relative;
}
</style>

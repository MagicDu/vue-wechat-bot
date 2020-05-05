<template>
<div>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="item in list" :key="item.id" :title="item.content">
        <div class='text-center lh20 mes-time'>
                    <span class='fs13'>{{ item.createTime }}</span>
        </div>
            <div class="message-item"
                    :class="(item.userType == '1' ) ? 'right' : ''">
                    <van-image round fit="cover"
                        class="avatar"
                        :src="item.avatar" />
                    <!-- 消息体 -->
                    <div class="message">
                        <!-- <div class="mesage-name lh24">{{ item.userName }}</div> -->
                        <div class="bubble bd4">
                                <div v-html="item.content" class="wang-editor"></div>
                        </div>
                    </div>
                </div>
      </div>
    </van-list>
  </van-pull-refresh>
   <van-submit-bar button-text="发送" class="my-vant-bar wang-editor"
        :class="showImg ? 'fixed-bar' : ''"
        @submit="onSubmit"
       >
        <!--  -->
        <van-cell-group>
            <!-- <vue-editor id="my-editor"
                class="my-editor" 
                :menuFixed="false"
                ref="myEditor" 
                width="100%"
                height="auto"
                v-model="message"
                :menus="menus" 
                isRealtime="true"
                ></vue-editor> -->
             <van-field v-model="message"
                type="textarea"
                placeholder=""
                rows="1"
                autosize/> 
        </van-cell-group>
                <div class="left mgr10" @click.stop="show">
            <img src="@/assets/images/biaoq.png" alt="">
        </div>
         <div class="left mgr10" @click.stop="show">
           <img src="@/assets/images/biaoq.png" alt="">
        </div>
    </van-submit-bar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showImg: false,
      message:"",
      list: [
        {
          id:"1",
          avatar:"http://ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
          content:"哈哈哈哈哈哈哈哈哈",
          userType:1,
          createTime:"2019/09/18",
          userName:"李倩"
        },
       {
          id:"2",
          avatar:"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1898582417,1582081952&fm=26&gp=0.jpg",
          content:"呵呵呵呵呵呵呵",
          userType:2,
          createTime:"2019/09/18",
        userName:"杨涛"
        },
         {
          id:"3",
          avatar:"http://ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
          content:"是吗",
          userType:1,
          createTime:"2019/09/18",
          userName:"李倩"
        },
       {
          id:"4",
          avatar:"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1898582417,1582081952&fm=26&gp=0.jpg",
          content:"是啊",
          userType:2,
          createTime:"2019/09/18",
        userName:"杨涛"
        },
      ],
      loading: false,
      finished: true,
      refreshing: false
    };
  },
  methods: {
    onLoad() {
      // setTimeout(() => {
      //   if (this.refreshing) {
      //     this.list = [];
      //     this.refreshing = false;
      //   }

      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   this.loading = false;

      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
    onRefresh() {
      // // 清空列表数据
      // this.finished = false;

      // // 重新加载数据
      // // 将 loading 设置为 true，表示处于加载状态
      // this.loading = true;
      // this.onLoad();
    },
    onSubmit(){
        if(this.message!=null||this.message.trim()!=""){
            let msg={
                "content":this.message,
                "receiveUser":"1"
            }
            this.$store.getters.STAFF_UPDATE.send(JSON.stringify(msg))
            let newMsg={
                id:"5",
                avatar:"http://ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",
                content: this.message,
                userType:1,
                createTime:"2019/09/18",
                userName:"杨涛"
            }
            this.list.push(newMsg)
            this.message=""
        }
    },
    mounted: function() {
      this.id = this.$route.params.id;
      //  this.$emit('changeTitle','hello');
    }
  }
};
</script>

<style lang="less">
.message-main {
    padding: 0 15px;
    overflow-y: auto;
    height: 100%;
    .height {
        height: calc(100% - 50px);
    }
    .message-main-h {
        min-height: calc(100% -200px);
    }

    //发送时间
    .mes-time {
        color: #999;
        padding: 6px 0;
    }
}

.message-item {
    display: flex;
    padding: 10px 0 15px;
    width: 100%;
    text-align: left;

    .avatar {
        width: 40px;
        height: 40px;
        margin-right: 6px;
    }

    .mesage-name {
        font-weight: bold;
    }

    //气泡
    .bubble {
        background: #ffffff;
        padding: 7px 10px;
        box-shadow: 0 3px 2px rgba(0, 0, 0, .1);
        position: relative;
        max-width: 286px;
        min-width: 30px;
        margin: 0 20px 0 5px
    }

    .bubble:before {
        content: "";
        border-style: solid;
        border-width: 8px 8px 8px 0;
        border-color: transparent #ffffff transparent transparent;
        position: absolute;
        top: 3px;
        left: -8px;
    }
}

//右侧
.message-item.right {
    flex-direction: row-reverse;

    .avatar {
        margin-left: 6px;
        margin-right: 0;
    }

    .bubble {
        background: #9EEA6A;
        color: #000;
        margin: 0 5px 0 20px;
    }

    .bubble:before {
        border-width: 8px 0 8px 8px !important;
        border-color: transparent transparent transparent #9EEA6A !important;
        left: 100%;
    }

    .mesage-name {
        text-align: right;
    }
}

// 底部回复
.my-vant-bar {
    background: #F5F5F5;
    padding: 5px;
    box-sizing: border-box;
    transition: all .3 ease-in;
    &.fixed-bar {
        bottom: 150px;
    }
    .van-submit-bar__bar {
        min-height: 40px;
        max-height: 100px;
        height: auto;
        align-items: flex-end;
        .van-cell-group {
            border-radius: 4px;
            width: 100%;
            margin-right: 5px;
        }
    }
    .van-button--danger {
        background: #9EEA6A;
        border: 0;
    }
    .van-submit-bar__button {
        width: 62px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        color: black;
    }
    .left {
        width: 27px;
        img {
            width: 100%;
        }
    }
}

// 标签
.emoji {
    position: fixed;
    bottom: -150px;
    left: 0;
    width: 100%;
    overflow-y: auto;
    max-height: 150px;
    padding: 5px 10px;
    box-sizing: border-box;
    background: #fff;
    transition: all .3 ease-in;
    &.show {
        bottom: 0;
    }
    img {
        width: 30px;
        margin: 4.5px
    }
}
</style>

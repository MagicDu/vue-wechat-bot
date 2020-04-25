<template>
    <van-cell :is-link="isLink" center>
      <template #title>
        <div class="chat-right">
          <div>
            <img :src="iconSrc" class="avatar" />
          </div>
          <div class="content-right-msg" v-show="isMsg">
            <div class="content-time-wrap">
              <div class="content-title">{{content_title}}</div>
              <div class="content-time">{{time}}</div>
            </div>
            <div class="content-tip">{{content}}</div>
          </div>
           <div class="content-time-wrap content-right-center " v-show="!isMsg">
              <div class="content-title">{{content_title}}</div>
          </div>
        </div>
      </template>
    </van-cell>
</template>
<script>
export default {
 name:"MyVantCell",
   props: ["content_title", "time","content","iconSrc","isMsg","isLink"]
};
</script>
<style scoped>
.avatar {
  border-radius: 5px;
  height: 35px;
  widows: 35px;
}
.chat-right {
  display: flex;
  flex-direction: row;
}
.content-right-msg {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 15px;
}
.content-right-center {
  padding-left: 15px;
}
.content-title {
  font-size: 13px;
  font-family: "Microsoft YaHei";
}
.content-tip {
  color: darkgrey;
  font-size: 8px;
}
.content-time {
  color: darkgrey;
  font-size: 8px;
}
.content-time-wrap{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
	position: relative;
}
</style>

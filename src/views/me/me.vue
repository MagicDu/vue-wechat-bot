<template>
  <div>
    <MyVantCell
      :iconSrc="avatarImage"
      :isMsg="true"
      :isLink="true"
      content_title="布鲁斯"
      content="微信号：bickcess"
    />
    <van-cell-group title=" ">
      <MyVantCell :iconSrc="picImage" :isMsg="false" :isLink="true" content_title="相册" />
      <MyVantCell :iconSrc="collectImage" :isMsg="false" :isLink="true" content_title="收藏" />
      <MyVantCell :iconSrc="walletImage" :isMsg="false" :isLink="true" content_title="钱包" />
      <MyVantCell :iconSrc="cardImage" :isMsg="false" :isLink="true" content_title="卡包" />
    </van-cell-group>
    <van-cell-group title=" ">
      <MyVantCell :iconSrc="emojiImage" :isMsg="false" :isLink="true" content_title="表情" />
      <MyVantCell :iconSrc="settingImage" :isMsg="false" :isLink="true" content_title="设置" />
    </van-cell-group>
  </div>
  <!-- <router-view transition="cover"></router-view> -->
</template>
<script>
import MyVantCell from "@/components/MyVantCell";
import avatarImage from "@/assets/images/ava-d.jpeg";
import picImage from "@/assets/images/me_more-my-album.png";
import collectImage from "@/assets/images/me_more-my-favorites.png";
import walletImage from "@/assets/images/me_more-my-bank-card.png";
import cardImage from "@/assets/images/me_my-card-package-icon.png";
import emojiImage from "@/assets/images/me_more-expression.png";
import settingImage from "@/assets/images/me_more-setting.png";

export default {
  data() {
    return {
      picImage: picImage,
      collectImage: collectImage,
      walletImage: walletImage,
      cardImage: cardImage,
      emojiImage: emojiImage,
      settingImage: settingImage,
      avatarImage: avatarImage,
      decline: false
    };
  },
  components: {
    MyVantCell
  }
};
</script>
<style scoped>
.component-me {
  padding-top: 1px;
  background-color: #efeff4;
}
</style>

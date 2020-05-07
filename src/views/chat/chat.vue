<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <MyVantCell
      v-for="item in list"
      :key="item.id"
      @click.native="toDetail(item.userId)"
      :isMsg="true"
      :iconSrc="item.avatar"
      :content_title="item.nickname"
      :time="item.createDate|formatDate"
      :content="item.content"
    />
  </van-list>
</template>
<script>
import moment from "moment";
import MyVantCell from "@/components/MyVantCell";
import { getChatList } from "@/api/chat";
export default {
  data() {
    return {
      detail: "/detail",
      loading: false,
      finished: false,
      list: []
    };
  },
  filters: {
    formatDate(value) {
      let now = moment();
      let past = moment(value);
      let diff = now.diff(past, "days");
      if (diff == 0) {
        return past.format("HH:mm");
      }
      if (diff >= 1 && diff <= 3) {
        return diff + "天前";
      }
      if (diff > 3) {
        return past.format("MM/DD/YY");
      }
    }
  },
  methods: {
    onLoad() {
      getChatList().then(response => {
        this.list = response.data;
        this.loading = true;
        this.finished=true;
      });
    },
    toDetail(id) {
      this.$router.push({ path: "/chats/detail/" + id });
    }
  },
  components: {
    MyVantCell
  }
};
</script>
<style scoped>
</style>

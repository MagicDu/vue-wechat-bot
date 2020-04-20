<template>
  <div>
    <header class="app-header" style="display:none;" v-show="appload">
      <div class="_effect" :class="{'_effect--50':decline}">
        <NavBar v-show="navShow" :title="title" :isleftarrow="isleftarrow" :v-on:changeTitle="changeNavTitle"></NavBar>
      </div>
    </header>
    <app-main style="padding-top:45px" />
    <footer v-show="!isleftarrow" class="app-footer _line-fine">
      <div class="_effect" :class="{'_effect--50':decline}">
        <TabBar />
      </div>
    </footer>
  </div>
</template>

<script>
import { AppMain, TabBar, NavBar } from "./components";
export default {
  data() {
    return {
      title: "",
      isleftarrow: false,
      transitionName: "fade",
      navShow: true,
      decline: false, //router animation
      appload: true
    };
  },
  name: "Layout",
  components: {
    AppMain,
    TabBar,
    NavBar
  },
  mounted() {
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;
  },
  watch: {
    $route(to) {
      this.title = to.meta.title;
      this.isleftarrow =  to.meta.isleftarrow;
     }
  },
  methods:{
    changeNavTitle(title){
        this.title=title
    }
  }
};
</script>

<style>
@import "../assets/css/common.scss";
@import "../assets/css/base.scss";
</style>
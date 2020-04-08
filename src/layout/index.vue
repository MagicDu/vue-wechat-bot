<template>
  <div>
 <header class="app-header" style="display:none;" v-show="appload">
        <div class="_effect" :class="{'_effect--50':decline}">
            <headerbar style="overflow:visible;"></headerbar>
        </div>
  </header>
    <app-main style="padding-top:45px"/>
    <footer class="app-footer _line-fine">
        <div class="_effect " :class="{'_effect--50':decline}">
            <VantNavBar />
        </div>
    </footer>  
  </div>
</template>

<script>
import { AppMain,VantNavBar,Headerbar } from "./components";
export default {
  data(){
    return {
       decline: false, //router animation
       appload:true
    }
  },
  name: "Layout",
  components: {
    AppMain,
    VantNavBar,
    Headerbar
  }
};
</script>

<style>
@import '../assets/css/common.scss';
@import '../assets/css/base.scss';

</style>
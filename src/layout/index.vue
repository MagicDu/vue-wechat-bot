<template>
  <div>
 <header class="app-header" style="display:none;" v-show="appload">
        <div class="_effect" :class="{'_effect--50':decline}">
            <headerbar style="overflow:visible;"></headerbar>
        </div>
  </header>
    <app-main />
    <footer class="app-footer _line-fine">
        <div class="_effect " :class="{'_effect--50':decline}">
            <navbar />
        </div>
    </footer>  
  </div>
</template>

<script>
import { AppMain,Navbar,Headerbar } from "./components";
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
    Navbar,
    Headerbar
  }
};
</script>

<style>
@import '../assets/css/common.scss';
@import '../assets/css/base.scss';

</style>
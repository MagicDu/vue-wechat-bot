<template>
  <div>
    <app-main />
    <footer class="app-footer _line-fine">
        <div class="_effect " :class="{'_effect--50':decline}">
            <navbar />
        </div>
    </footer>  
  </div>
</template>

<script>
import { AppMain,Navbar } from "./components";
export default {
  data(){
    return {
       decline: false //router animation
    }
  },
  name: "Layout",
  components: {
    AppMain,
    Navbar
  }
};
</script>

<style>
@import '../assets/css/common.scss';
@import '../assets/css/base.scss';

</style>
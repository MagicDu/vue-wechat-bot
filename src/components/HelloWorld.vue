<template>
<div>
   <baidu-map
    v-bind:style="mapStyle"
    class="bmView"
    :scroll-wheel-zoom="true"
    :center="location"
    :zoom="zoom"
    ak="WSrX4bCfgcjTfhWNCwvfI1ZnQnfZDxFW&amp;ver=1"
  />
  <bm-view style="width: 100%; height:400px;"></bm-view>
</div>
</template>

<script>
import {BaiduMap,BmView} from 'vue-baidu-map'
export default {
  name: 'HelloWorld',
 data(){
   return {
      location: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 12.8,
       mapStyle: {
          width: '100%',
          height:  window.innerHeight-window.innerHeight*0.2+ 'px'
    },
   }

 },
 created(){
   
 },
  components:{
    BaiduMap,
    BmView
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map{
  height: calc(10% + 10px);;
}
</style>

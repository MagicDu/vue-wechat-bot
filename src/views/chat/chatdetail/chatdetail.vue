<template>
<button>{{id}}</button>
</template>

<script>
export default {
 data(){
     return{
         name:"hello",
         id:""
     }
 },
  components: {
    
  },
  mounted:function(){
    this.id=  this.$route.params.id
  }
}
</script>

<style>

</style>
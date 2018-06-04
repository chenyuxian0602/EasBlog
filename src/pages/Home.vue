<template>
<div id="home">
  <home-header></home-header>
  <div id="hello">你好啊</div>
</div>
</template>
 
<script>
import HomeHeader from '@/components/HomeHeader.vue'
export default {
  components:{
    HomeHeader
  }
}
</script>

<style>
#hello {
  height: 100%;
  width: 80%;
  font-size: 300%;
  padding-top: 1%;
  border-bottom: #777 solid 3px;
  margin: 0 auto;
}
</style>

<template>
<div id="home">
  <home-header></home-header>
  <div id="hello">你好啊！</div>
  <div id="content"></div>
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
  height: 250px;
  font-size: 1000%;
  text-align: center;
  padding-top: 1%;
}
#content{
  height: 500px;
  background-color: #339;
}
</style>

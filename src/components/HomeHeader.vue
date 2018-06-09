<template>
  <div id="home_header">
    <img id="home_header_img" src="@/assets/home_bg_01.gif"/>
    <img id="home_header_img" src="@/assets/home_bg_02.gif"/>
    <img id="home_header_img" src="@/assets/home_bg_03.gif"/>
    <home-header-des></home-header-des>
    <homeheader-rollup></homeheader-rollup>
  </div>
</template>

<script>
import HomeHeaderDes from '@/components/HomeHeaderDes.vue'
import HomeheaderRollup from '@/components/HomeheaderRollup.vue'
export default {
  name: 'HomeHeader',
  components: {
    HomeHeaderDes, HomeheaderRollup
  }
}
</script>

<style scoped>
#home_header_img {
  max-width: 100%;
}

</style>

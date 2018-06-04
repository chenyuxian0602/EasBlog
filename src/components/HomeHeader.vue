<template>
  <div id="home_header">
    <img id="home_header_img" :src="home_header_img_1"/>
    <img id="home_header_img" :src="home_header_img_2"/>
    <img id="home_header_img" :src="home_header_img_3"/>
    <home-header-des></home-header-des>
    <homeheader-rollup></homeheader-rollup>
  </div>
</template>

<script>
import HomeHeaderDes from '@/components/HomeHeaderDes.vue'
import HomeheaderRollup from '@/components/HomeheaderRollup.vue'
export default {
  name: 'HomeHeader',
  data(){
    return {
      home_header_img_1: home_bg_01,
      home_header_img_2: home_bg_02,
      home_header_img_3: home_bg_03
    }
  },
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

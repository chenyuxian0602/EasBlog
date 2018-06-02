<template>
<div id="navbar">

  <div id="navbar_bg"></div>

  <div id="navbar-container">
    <nav-bar-brand class="col-1 navbar-nav"></nav-bar-brand>
    <div class="col-4 navbar-nav"></div>
    <nav-bar-item class="col-1 navbar-nav" mes="Somewhere" to="/somewhere" tag="a"></nav-bar-item>
    <nav-bar-item class="col-1 navbar-nav" mes="Only" to="/somewhere" tag="a"></nav-bar-item>
    <nav-bar-item class="col-1 navbar-nav" mes="We" to="/somewhere" tag="a"></nav-bar-item>
    <nav-bar-item class="col-1 navbar-nav" mes="Know" to="/somewhere" tag="a"></nav-bar-item>
  </div>

</div>
</template>

<script>
import NavBarBrand from '@/components/NavBarBrand.vue'
import NavBarItem from '@/components/NavBarItem.vue'

export default {
  components: {
    NavBarBrand, NavBarItem
  },
  watch:{
  }
}

</script>

<style scoped>
#navbar-container {
  box-sizing: border-box;
  margin-top: 1%;
}
.col-1 { width: 10%; }
.col-2 { width: 20%; }
.col-3 { width: 30%; }
.col-4 { width: 40%; }
.col-5 { width: 50%; }
.col-6 { width: 60%; }
.col-7 { width: 70%; }
.col-8 { width: 80%; }
.col-9 { width: 90%; }

#navbar {
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: 9662;
  text-align: center;
}
#navbar_bg{
  width: 100%;
  height: 95px;
  background-color: black;
  opacity: 0.2;
  position: absolute;
  z-index: -1;
}
.navbar-nav {
  display: inline-block;
}
</style>

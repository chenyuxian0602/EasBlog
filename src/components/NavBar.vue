<template>
<div id="navbar">

  <div id="navbar_bg"></div>

  <div id="navbar_container">
    <nav-bar-brand class="col-1 navbar_nav"></nav-bar-brand>
    <div class="col-4 navbar_nav"></div>
    <nav-bar-item class="col-1 navbar_nav" mes="Somewhere" to="/somewhere" tag="a"></nav-bar-item>
    <nav-bar-item class="col-1 navbar_nav" mes="Only" to="/somewhere" tag="a"></nav-bar-item>
    <nav-bar-item class="col-1 navbar_nav" mes="We" to="/somewhere" tag="a"></nav-bar-item>
    <nav-bar-item class="col-1 navbar_nav" mes="Know" to="/somewhere" tag="a"></nav-bar-item>
  </div>

</div>
</template>

<script>
import NavBarBrand from '@/components/NavBarBrand.vue'
import NavBarItem from '@/components/NavBarItem.vue'

export default {
  components: {
    NavBarBrand, NavBarItem
  }
}

</script>

<style scoped>
#navbar {
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 9662;
}
#navbar_bg{
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2;
  position: absolute;
  z-index: -1;
}

#navbar_container {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  width: 100%;
}
#navbar_container:before{
    content:"";
    display:inline-block;
    height:100%;
    vertical-align:middle;
}

.navbar_nav {
  display: inline-block;
  vertical-align: middle;
  padding-top: 1.2%;
}
.navbar_items {
  font-size: 100%;
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
</style>

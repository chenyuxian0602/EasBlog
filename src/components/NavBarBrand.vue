<template>
  <div id="navbar_brand">
    <router-link to="/" tag="a" id="logo_dark" :class="[true ? '' : 'itemnone']">
      <img src="@/assets/logo_dark.png" alt="logo_dark">
    </router-link>
    <router-link to="/" tag="a" id="logo_light" :class="[true ? 'itemnone' : '']">
      <img src="@/assets/logo_light.png" alt="logo_light">
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.itemnone{
  display: none;
}
#navbar_brand {
  height: auto;
}
#navbar_brand img{
  position: absolute;
  width: 8%;
  top: 14%;
}
</style>

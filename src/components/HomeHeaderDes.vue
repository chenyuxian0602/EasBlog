<template>
  <div id="home_header_des">
    <img id="home_header_icon" src="@/assets/des_dark.png"/>
    <router-link to="/contact" tag="a" id="home_header_btn">
      <img src="@/assets/home_header_btn.png" alt="pickme">
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#home_header_des {
  position: absolute;
  left: 10%;
  width: 30%;
  top: 0;
  margin-top: 15%;
}
#home_header_icon {
  width: 80%;
}
#home_header_btn {
  width: 80%;
}
#home_header_btn img{
  width: 80%;
  border-radius: 15px;
  border: 6px double white;
}
</style>

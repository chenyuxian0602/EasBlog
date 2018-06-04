<template>
  <div id="home_header_des">
    <img id="home_header_icon" :src="des_dark"/>
    <router-link to="/contact" tag="a" id="home_header_btn">
      <img :src="home_header_btn" alt="pickme">
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      des_dark: des_dark,
      home_header_btn: home_header_btn
    }
  }
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
  /* border: 1px solid white; */
  border-radius: 15px;
  outline: 13px double white;
}
</style>

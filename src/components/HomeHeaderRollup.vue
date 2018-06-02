<template>
  <div id="rollup">
    <img src="@/assets/arrow.png" alt="roll_up_arrow" v-on:mouseover="rollup">
  </div>
</template>

<script>
var isRolling = true, rolltime = 0;
export default {
  methods:  {
    rollup() {
      var topPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (isRolling === true && topPos === 0) {
        isRolling = false;
        rolling(100);
        setTimeout(null, 5000);
      }
    }
  }
}

function rolling(i) {
  if (i < 0) {
    isRolling = true;
    return;
  }
  setTimeout(function() {
    window.scrollTo(0, 100-i)
    i -= 5;
    rolling(i)
  }, 5);
}
</script>

<style>
#rollup {
  position: absolute;
  top:0%;
  width: 100%;
  margin-top: 44%;
}
#rollup img {
  width: 7%;
}
</style>

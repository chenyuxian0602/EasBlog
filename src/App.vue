<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  margin: 0%;
  padding: 0%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  text-align: center;
  background-color: aliceblue;
}
</style>

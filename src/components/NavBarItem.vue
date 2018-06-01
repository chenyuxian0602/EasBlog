<template>
  <div id="navbar-items">
    <router-link :to="to" :tag="tag" class="dark">{{ mes }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["mes", "to", "tag"]
}
</script>


<style scoped>
.dark{
  color: #aaa;
  text-decoration-line: none;
}
.dark:hover {
  color: #fff;
  transition-duration: 400ms;
}
</style>

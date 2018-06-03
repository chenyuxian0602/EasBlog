<template>
  <div class="navbar_items">
    <router-link :to="to" :tag="tag" class="dark">{{ mes }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["mes", "to", "tag"]
}
</script>


<style scoped>
.navbar_items {
  height: 35px;
}
.dark{
  color: #aaa;
  text-decoration: none;
}
.dark:hover {
  color: #fff;
  transition-duration: 400ms;
}

</style>

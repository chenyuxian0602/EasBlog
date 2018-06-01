import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Somewhere from '@/pages/Somewhere.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },{
      path: '/somewhere',
      name: 'Somewhere',
      component: Somewhere,
      props: false
    }
  ]
})
router.beforeEach((to,  from, next) => {
  console.log(to, from)
  next()
})

export default router;

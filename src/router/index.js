import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Somewhere from '@/pages/Somewhere.vue'
import Contact from '@/pages/Contact.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/somewhere',
      name: 'Somewhere',
      component: Somewhere
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router;

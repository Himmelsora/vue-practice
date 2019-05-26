import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home.vue'
import SearchIp from '@/pages/Searchip.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/search_ip',
      component: SearchIp
    }
  ]
})

export default router

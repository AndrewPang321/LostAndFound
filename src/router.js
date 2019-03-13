import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Lost from './components/Lost.vue'
import Found from './components/Found.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lost',
      name: 'lost',
      component: Lost
    },
    {
      path: '/found',
      name: 'found',
      component: Found
    },
  ]
})

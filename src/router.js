import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Lost from './components/Lost.vue'
import Found from './components/Found.vue'
import ItemDetails from './components/ItemDetails.vue'
import Feedback from './components/Feedback.vue'

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
    {
      path: '/item/:lost_or_found/:itemId',
      name: 'item_details',
      component: ItemDetails
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
  ]
})

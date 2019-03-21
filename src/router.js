import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Lost from './components/Lost.vue'
import Found from './components/Found.vue'
import ItemDetails from './components/ItemDetails.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import Feedback from './components/Feedback.vue'
import AdminFeedback from './components/AdminFeedback.vue'
import UserReport from './components/UserReport.vue'
import BlacklistedUser from './components/BlacklistedUser.vue'

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
      path: '/signin',
      name: 'sign_in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign_up',
      component: SignUp
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/admin_feedback',
      name: 'admin_feedback',
      component: AdminFeedback
    },
    {
      path: '/admin_userreport',
      name: 'admin_user_report',
      component: UserReport
    },
    {
      path: '/admin_blacklisteduser',
      name: 'admin_blacklisted_user',
      component: BlacklistedUser
    },
  ]
})

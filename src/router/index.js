import Vue from 'vue'
import Router from 'vue-router'
import accueil from '../components/accueil'
import usersettings from '../components/usersettings'
import wishlist from '../components/wishlist'
import shoppingcart from '../components/shoppingcart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: accueil
    },
    {
      path: '/usersettings',
      name: 'usersettings',
      component: usersettings
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: wishlist
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    }
  ]
})

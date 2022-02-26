import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Listings from '../views/Listings.vue'
import GlobalListings from '../views/Global_listings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Listings',
    name: 'Listings',
    component: Listings
  },
  {
    path:'/Global_listings',
    name: 'Global_listings',
    component: GlobalListings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

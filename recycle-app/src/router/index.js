import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Listings from '../views/Listings.vue'
import GlobalListings from '../views/Global_listings.vue'

import {auth} from '../firebase'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  meta: {
      requiresAuth: true
    }
  },
  {
    path:'/Listings',
    name: 'Listings',
    component: Listings
  },
  {
    path:'/Global_listings',
    name: 'Global_listings',
    component: GlobalListings,
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
//Prevent insecure routing, e.g routing without logging in
router.beforeEach((to, from, next)=>{
  if ((to.path === '/login' || to.path === '/register') && auth.currentUser){
    next('/')
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth )&& !auth.currentUser){
   next('/login')
   return;
  }
  next();
})
export default router

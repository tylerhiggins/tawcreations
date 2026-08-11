import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/adopts',
    name: 'Adopts',
    component: () => import('../views/Adopts.vue')
  },
  {
    path: '/ych',
    name: 'YCH',
    component: () => import('../views/YCH.vue')
  },
  {
    path: '/nsfwych',
    name: 'NSFWYCH',
    component: () => import('../views/NSFWYCH.vue')
  },
  {
    path: '/digitalprices',
    name: 'DigitalPrices',
    component: () => import('../views/DigitalPrices.vue')
  },
  {
    path: '/craftprices',
    name: 'CraftPrices',
    component: () => import('../views/CraftPrices.vue')
  },
  {
    path: '/safegallery',
    name: 'SafeGallery',
    component: () => import('../views/SafeGallery.vue')
  },
  {
    path: '/NSFWGallery',
    name: 'NSFWGallery',
    component: () => import('../views/NSFWGallery.vue')
  },
  {
    path: '/tos',
    name: 'TOS',
    component: () => import('../views/TOS.vue')
  },
  {
    path: '/merch',
    name: 'Merch',
    component: () => import('../views/Merch.vue')
  },
  {
    path: '/orderconfirm',
    name: 'OrderConfirm',
    component: () => import('../views/OrderConfirm.vue')
  },
  // Vue Router 4 Catch-All Route for 404s (Replaces path: '*')
  {
    path: '/:pathMatch(.*)*',
    name: '/PageNotFound',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = createRouter({
  // Replaces mode: 'history' and base: process.env.BASE_URL
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


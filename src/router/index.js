import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () => import('../views/Home')
  },
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/case',
    name: 'case',
    // component: Home
    component: () => import('../views/case/case'),
    redirect: '/case/car',
    children: [
      {
        path: 'car',
        name: 'car',
        component: () => import('../views/case/car/car'),
      },
      {
        path: 'carControl',
        name: 'carControl',
        component: () => import('../views/case/carControl/carControl'),
      },
      {
        path: 'tv', // equipment
        name: 'tv',
        component: () => import('../views/case/tv/tv'),
      },
      {
        path: 'equipment', // equipment
        name: 'equipment',
        component: () => import('../views/case/equipment/equipment'),
      },
      {
        path: 'web', // equipment
        name: 'web',
        component: () => import('../views/case/web/web'),
      },
      {
        path: 'flat', // equipment
        name: 'flat',
        component: () => import('../views/case/flat/flat'),
      },
      {
        path: 'H5', // equipment
        name: 'H5',
        component: () => import('../views/case/H5/h5'),
      },
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/contact')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

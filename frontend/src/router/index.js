import Vue from 'vue';
import VueRouter from 'vue-router';

import Dash from '@/layouts/Dash.vue';
import Full from '@/layouts/Full.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/dash',
    component: Dash,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "dash" */ '@/views/Home.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "dash" */ '@/views/Cart.vue'),
      },
    ],
  },

  {
    path: '/', 
    component: Full,
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "full" */ '@/views/About.vue'),
      },
      {
        path: '*',
        redirect: { name: 'Home' },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

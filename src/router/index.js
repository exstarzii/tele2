import { createRouter, createWebHistory } from 'vue-router'
import RootView from '../views/RootView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: RootView,
      children: [
        {
          path: '', 
          name: 'index',
          component: () => import('../components/Nothing.vue')
        },
        {
          path: 'Advantages',
          name: 'Advantages',
          component: () => import('../components/Nothing.vue')
        },
        {
          path: 'Rates', 
          name: 'Rates',
          component: () => import('../components/Nothing.vue')
        },
        {
          path: 'Stocks', 
          name: 'Stocks',
          component: () => import('../components/Nothing.vue')
        },
        {
          path: 'Promotariff', 
          name: 'Promotariff',
          component: () => import('../components/Nothing.vue')
        },
        {
          path: 'eSIM', 
          name: 'eSIM',
          component: () => import('../components/Nothing.vue')
        },
        {
          path: 'Connection', 
          name: 'Connection',
          component: () => import('../components/Nothing.vue')
        }
      ]
    }
  ]
})

export default router

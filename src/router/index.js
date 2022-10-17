import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'map',
    component: HomeView
  },
  {
    path: '/map',
    name: 'Mapa',
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

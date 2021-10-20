import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobApplication from '../views/JobApplication.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/applyto/:jobname',
    name: 'JobApplication',
    component: JobApplication
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

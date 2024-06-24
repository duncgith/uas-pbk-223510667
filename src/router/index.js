import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/layout.vue'
import HomePage from '../views/HomePage.vue'
import TaskLinks from '../views/TaskLinks.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: HomePage },
      { path: 'tasks', component: TaskLinks }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

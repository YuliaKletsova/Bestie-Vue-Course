import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import CatPage from './pages/CatPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/cat/:id?', name: 'CatPage', component: CatPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

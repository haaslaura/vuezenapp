import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Breathing from './views/Breathing.vue'
import Quote from './views/Quote.vue'
import Calm from './views/Calm.vue'
import Stats from './views/Stats.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/breathing', name: 'Breathing', component: Breathing },
  { path: '/quote', name: 'Quote', component: Quote },
  { path: '/calm', name: 'Calm', component: Calm },
  { path: '/stats', name: 'Stats', component: Stats },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
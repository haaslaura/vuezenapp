import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/VZHome.vue'
import Breathing from './views/VZBreathing.vue'
import Quote from './views/VZQuote.vue'
import Calm from './views/VZCalm.vue'
import Stats from './views/VZStats.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
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
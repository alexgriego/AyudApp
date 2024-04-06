import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardLayout from '@/components/CardLayout.vue'
import AuthRoutes from './AuthRouter'
import ProfileRouter from './ProfileRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        ...AuthRoutes,
        ...ProfileRouter,
      ]
    }
  ]
})

export default router

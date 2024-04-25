import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthRoutes from './AuthRouter'
import ProfileRouter from './ProfileRouter'
import beneficiariosRouter from './beneficiarios.router'
import patrocinadoresRouter from './patrocinadores.router'
import inventarioRoutes from './inventario.router'
import censoRouter from './censoRouter'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        ...AuthRoutes,
        ...ProfileRouter,
        ...beneficiariosRouter,
        ...patrocinadoresRouter,
        ...inventarioRoutes,
        ...censoRouter
      ]
    }
  ]
})

export default router

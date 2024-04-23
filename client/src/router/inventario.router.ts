const inventarioRoutes = [
    {
        path: '/inventario',
        name: 'inventario',
        component: () => import('@/views/Inventario/ListView.vue')
    },
    {
        path: '/inventario/crear',
        name: 'crearProducto',
        component: () => import('@/views/Inventario/CreateView.vue')
    },
    {
        path: '/inventario/editar/:codigo',
        name: 'editarProducto',
        component: () => import('@/views/Inventario/UpdateView.vue')
    },
    /**Rutas de dinero */
    {
        path: '/inventario/dineros',
        name: 'dineros',
        component: () => import('@/views/Economia/ListView.vue')
    },
    {
        path: '/inventario/dineros/crear',
        name: 'crearDinero',
        component: () => import('@/views/Economia/CreateView.vue')
    },
    {
        path: '/inventario/dineros/editar/:id',
        name: 'editarDinero',
        component: () => import('@/views/Economia/DetailView.vue')
    },
    /**Rutas de jornadas */
    {
        path: '/inventario/jornadas',
        name: 'jornadas',
        component: () => import('@/views/Jornadas/ListView.vue')
    },
    {
        path: '/inventario/jornadas/crear',
        name: 'crearJornada',
        component: () => import('@/views/Jornadas/CreateView.vue')
    },
    {
        path: '/inventario/jornadas/detalle/:id',
        name: 'verJornada',
        component: () => import('@/views/Jornadas/DetailView.vue')
    }
]

export default inventarioRoutes
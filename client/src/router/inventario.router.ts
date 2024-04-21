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
    }
]

export default inventarioRoutes
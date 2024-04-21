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
    }
]

export default inventarioRoutes
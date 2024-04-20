const patrocinadoresRouter = [
    {
        path: '/patrocinadores',
        name: 'patrocinadores',
        component: () => import('../views/patrocinadores/ListView.vue')
    },
    {
        path: '/patrocinadores/crear',
        name: 'crear-patrocinador',
        component: () => import('../views/patrocinadores/CreateView.vue')
    },
    {
        path: '/patrocinadores/editar/:NIT',
        name: 'editar-patrocinador',
        component: () => import('../views/patrocinadores/UpdateView.vue')
    }

]

export default patrocinadoresRouter
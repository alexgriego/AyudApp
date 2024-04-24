const censoRouter = [
    {
        path: '/censos',
        name: 'censos',
        component: () => import('../views/Censos/CensosListView.vue')
    },
    {
        path: '/censos/nuevo',
        name: 'nuevoCenso',
        component: () => import('../views/Censos/CensosCreateView.vue')
    },
    {
        path: '/censos/:id',
        name: 'censo',
        component: () => import('../views/Censos/CensosDetailView.vue')
    }
]

export default censoRouter
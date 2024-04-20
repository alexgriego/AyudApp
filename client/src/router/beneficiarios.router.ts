import BeneficiariosView from "@/views/beneficiarios/BeneficiariosView.vue"

const beneficiariosRouter = [
    {
        path: '/beneficiarios',
        name: 'beneficiarios',
        component: BeneficiariosView
    },
    {
        path: '/beneficiarios/nuevo-beneficiario',
        name: 'nuevo-beneficiario',
        component: () => import('@/views/beneficiarios/BeneficiariosCreateView.vue')
    },
    {
        path: '/beneficiarios/:identificacion',
        name: 'ver-datos-beneficiario',
        component: () => import('@/views/beneficiarios/BeneficiariosDetailView.vue')
    }
]

export default beneficiariosRouter
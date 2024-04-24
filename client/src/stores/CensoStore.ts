import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { errorMessage, successMessage } from '@/components/messages'
import type { BeneficiarioTypes } from '@/types/BeneficiarioTypes'
import { createFamilia } from '@/apis/familias.apis'
import SesionStore from './SesionStore'
import BeneficiarioStore from './BeneficiariosStore'
const CensoStore = defineStore('Censo', () => {
    const url = useRouter()
    const lider = ref(0)
    const store = BeneficiarioStore()
    const relacionados = ref([] as BeneficiarioTypes[])

    const setearLider = (id: number) => {
        lider.value = id
        obtenerRelacionados()
    }

    const eliminarLider = () => {
        lider.value = 0
    }

    const obtenerRelacionados = () => {
        relacionados.value = store.beneficiarios.filter(beneficiario => beneficiario.identificacion !== lider.value)
    }

    const eliminarRelacionado = (id: number) => {
        relacionados.value = relacionados.value.filter(relacionado => relacionado.identificacion !== id)
    }

    const procesarFamilia = () => {
        console.log('Procesando familia')
    }

    const procesarCenso = async (item: any) => {
        await createFamilia(item)
            .then((Response) => {
                successMessage('Hecho', 'Registro creado con éxito')
                url.push('/censos')

            })
    }

    return {
        lider,
        setearLider,
        eliminarLider,
        relacionados,
        eliminarRelacionado,
        procesarFamilia,
        procesarCenso

    }
})

export default CensoStore

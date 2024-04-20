import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { errorMessage, successMessage } from '@/components/messages'
import type { BeneficiarioTypes } from '@/types/BeneficiarioTypes'
import { getBeneficiario, getBenefinciarios, updateBeneficiario, deleteBeneficiario, saveBeneficiario } from '@/apis/beneficiarios.apis'
import SesionStore from './SesionStore'
const BeneficiarioStore = defineStore('beneficiario', () => {
    const url = useRouter()
    const sesion = SesionStore()
    const beneficiarios = ref([] as BeneficiarioTypes[])
    let beneficiarios_local = beneficiarios.value
    const beneficiario = ref({} as BeneficiarioTypes)

    const obtenerBeneficiarios = async () => {
        await getBenefinciarios()
            .then((Response) => {
                beneficiarios.value = Response.data
                beneficiarios_local = beneficiarios.value
            })
    }
    const obtenerBeneficiario = async (identificacion: number) => {
        const response = await getBeneficiario(identificacion)
        console.log(response)
        return response.data
    }

    const crearBeneficiario = async (beneficiario: BeneficiarioTypes) => {
        sesion.alterLoading()
        await saveBeneficiario(beneficiario)
            .then((Response) => {
                obtenerBeneficiarios()
                successMessage('Hecho', 'Beneficiario creado correctamente')
                url.push({ name: 'beneficiarios' })
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                sesion.alterLoading()
            })
    }


    const actualizarBeneficiario = async (identificacion: number, beneficiario: BeneficiarioTypes) => {
        sesion.alterLoading()
        await updateBeneficiario(identificacion, beneficiario)
            .then((Response) => {
                obtenerBeneficiarios()
                successMessage('Hecho', 'Beneficiario actualizado correctamente')
                url.push({ name: 'beneficiario', params: { identificacion: identificacion } })
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                sesion.alterLoading()
            })
    }

    const eliminarBeneficiario = async (identificacion: number) => {
        sesion.alterLoading()
        await deleteBeneficiario(identificacion)
            .then((Response) => {
                obtenerBeneficiarios()
                successMessage('Hecho', 'Beneficiario eliminado correctamente')
                url.push({ name: 'beneficiarios' })
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                sesion.alterLoading()
            })
    }

    return {
        beneficiarios,
        beneficiario,
        obtenerBeneficiarios,
        obtenerBeneficiario,
        crearBeneficiario,
        actualizarBeneficiario,
        eliminarBeneficiario
    }
})

export default BeneficiarioStore

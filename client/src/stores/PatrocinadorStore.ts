import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { errorMessage, successMessage } from '@/components/messages'
import { getPatrocinador, getPatrocinadores, savePatrocinador, updatePatrocinador, deletePatrocinador } from '@/apis/patrocinadores.apis'
import type { PatrocinadorTypes } from '@/types/PatrocinadorTypes'
const PatrocinadorStore = defineStore('patrocinador', () => {
    const url = useRouter()

    const obtenerPatrociandores = async () => {
        try {
            const { data } = await getPatrocinadores()
            return data
        } catch (error) {
            errorMessage(error)
        }
    }

    const obtenerPatrocinador = async (NIT: number) => {
        try {
            const response = await getPatrocinador(NIT)
            return response.data
        } catch (error) {
            errorMessage(error)
        }

    }

    const crearPatrocinador = async (data: PatrocinadorTypes) => {
        await savePatrocinador(data)
            .then((Response) => {
                successMessage('¡Hecho!', 'El patrocinador ha sido creado exitosamente')
                url.push('/patrocinadores')
            })
            .catch((error) => {
                errorMessage(error)
            })

    }

    const actualizarPatrocinador = async (NIT: number, data: PatrocinadorTypes) => {
        try {
            await updatePatrocinador(NIT, data)
            successMessage('¡Hecho!', 'El patrocinador ha sido actualizado exitosamente')
            url.push('/patrocinadores')
        } catch (error) {
            errorMessage(error)
        }

    }

    const eliminarPatrocinador = async (NIT: number) => {
        try {
            await deletePatrocinador(NIT)
            successMessage('¡Hecho!', 'El patrocinador ha sido eliminado exitosamente')
            url.push('/patrocinadores')
        } catch (error) {
            errorMessage(error)
        }

    }

    const buscarPatrocinador = async (NIT: number) => {
        await obtenerPatrocinador(NIT)
            .then((Response) => {
                return Response
            })
    }


    return {
        obtenerPatrociandores,
        obtenerPatrocinador,
        buscarPatrocinador,
        crearPatrocinador,
        actualizarPatrocinador,
        eliminarPatrocinador
    }
})

export default PatrocinadorStore

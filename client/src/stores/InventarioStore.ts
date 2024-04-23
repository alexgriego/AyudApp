import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import {
    getInventario, getProducto, createProducto, updateProducto,
    deleteProducto, getDinero, getDineros, createDinero, updateDinero, deleteDinero,
    createJornada, getJornada, getJornadas, deleteJornada,
    searchJornada,
    finishJornada
} from '@/apis/inventario.apis'
import { errorMessage, successMessage } from '@/components/messages'
import type { ProductoTypes } from '@/types/InventarioTypes'
const InventarioStore = defineStore('inventario', () => {
    const url = useRouter()

    const obtenerProductos = async () => {
        const { data } = await getInventario()
        return data
    }

    const obtenerProducto = async (id: any) => {
        const { data } = await getProducto(id)
        return data
    }

    const crearProducto = async (data: any) => {
        await createProducto(data)
            .then((Response) => {
                successMessage('¡Hecho!', 'Producto creado con éxito')
                url.push({ name: 'inventario' })
            })
    }

    const actualizarProducto = async (id: any, data: ProductoTypes) => {
        await updateProducto(id, data)
            .then((Response) => {
                successMessage('¡Hecho!', 'Producto actualizado con éxito')
                url.push({ name: 'inventario' })
            })
    }

    const eliminarProducto = async (id: any) => {
        await deleteProducto(id)
            .then((Response) => {
                successMessage('¡Hecho!', 'Producto eliminado con éxito')
                url.push({ name: 'inventario' })
            })
    }

    const obtenerDineros = async () => {
        const { data } = await getDineros()
        return data
    }

    const guardarDineros = async (data: any) => {
        await createDinero(data)
            .then((Response) => {
                successMessage('¡Hecho!', 'Dinero creado con éxito')
                url.push({ name: 'dineros' })
            })
            .catch((error) => {
                errorMessage(error)
            })

    }

    const obtenerDinero = async (id: any) => {
        const { data } = await getDinero(id)
        return data
    }

    const actualizarDinero = async (id: any, data: any) => {
        await updateDinero(id, data)
            .then((Response) => {
                successMessage('¡Hecho!', 'Registro actualizado con éxito')
                url.push({ name: 'dineros' })
            })
    }

    const eliminarDinero = async (id: any) => {
        await deleteDinero(id)
            .then((Response) => {
                successMessage('¡Hecho!', 'Registro eliminado con éxito')
                url.push({ name: 'dineros' })
            })
    }

    const guardarJornada = async (data: any) => {
        await createJornada(data)
            .then((Response) => {
                successMessage('¡Hecho!', 'Jornada creada con éxito')
                url.push({ name: 'jornadas' })
            })
            .catch((error) => {
                errorMessage(error)
            })
    }

    const obtenerJornadas = async () => {
        const { data } = await getJornadas()
        return data
    }

    const buscarJornada = async (id: any) => {
        const { data } = await searchJornada(id)
        return data
    }

    const finalizarJornada = async (id: any) => {
        await finishJornada(id)
            .then((Response) => {
                successMessage('¡Hecho!', 'Jornada finalizada con éxito')
                url.push({ name: 'jornadas' })
            })
            .catch((error) => {
                errorMessage(error)
            })
    }

    const eliminarJornada = async (id: any) => {
        await deleteJornada(id)
            .then((Response) => {
                successMessage('¡Hecho!', 'Jornada eliminada con éxito')
                url.push({ name: 'jornadas' })
            })
            .catch((error) => {
                errorMessage(error)
            })
    }

    return {
        obtenerProductos,
        obtenerProducto,
        crearProducto,
        actualizarProducto,
        eliminarProducto,
        obtenerDineros,
        guardarDineros,
        obtenerDinero,
        actualizarDinero,
        eliminarDinero,
        guardarJornada,
        obtenerJornadas,
        buscarJornada, finalizarJornada, eliminarJornada

    }
})

export default InventarioStore

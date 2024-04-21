import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { getInventario, getProducto, createProducto, updateProducto, deleteProducto } from '@/apis/inventario.apis'
import { successMessage } from '@/components/messages'
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

    return {
        obtenerProductos,
        obtenerProducto,
        crearProducto,
        actualizarProducto,
        eliminarProducto

    }
})

export default InventarioStore

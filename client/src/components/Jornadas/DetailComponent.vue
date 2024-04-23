<template>
    <div class="card">

        <div class="card-body">
            <h5 class="card-title">Detalles del evento <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success" @click="finalizar">Finalizar</button>
                    <button type="button" class="btn btn-danger" @click="borrar">Cancelar</button>
                </div>
            </h5>
            <p class="card-text">
                <strong>Nombre:</strong> {{ data.nombre }}<br>
                <strong>Fecha:</strong> {{ data.fecha_inicio }}<br>
                <strong>Descripción:</strong> {{ data.descripcion }}<br>
                <strong>Estado:</strong> {{ data.es_finalizado ? 'En proceso' : 'Finalizado' }}<br>
                <strong>Usuario:</strong> {{ data.created_by }}<br>
                <hr>
            <div v-if="data.fondos">
                <strong>Fondos:</strong> {{ data.cantidad_fondos }}<br>
                <strong>Patrocinador:</strong> {{ dinero.patrocinador }}<br>
            </div>
            <div v-if="data.producto">
                <strong>Producto:</strong> {{ producto.nombre }}<br>
                <strong>Cantidad:</strong> {{ data.cantidad_producto }}<br>
            </div>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import InventarioStore from '@/stores/InventarioStore';
import type { EventoTypes } from '@/types/InventarioTypes';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { warningMessage } from '../messages';
const url = useRouter()
const id = url.currentRoute.value.params.id
const data = ref({} as EventoTypes)
const dinero = ref({} as any)
const producto = ref({} as any)

const inventario = InventarioStore()

const getData = async () => {
    data.value = await inventario.buscarJornada(id)
    if (data.value.fondos) {
        dinero.value = (await inventario.obtenerDinero(data.value.fondos))[0]
    }
    if (data.value.producto) {
        producto.value = (await inventario.obtenerProducto(data.value.producto))[0]
    }
}

getData()

const finalizar = async () => {
    await warningMessage('¿Está seguro de finalizar el evento?', 'Este evento no podrá ser modificado', () => {
        inventario.finalizarJornada(id)
    })
}

const borrar = async () => {
    await warningMessage('¿Está seguro de cancelar el evento?', 'Este evento no podrá ser recuperado', () => {
        inventario.eliminarJornada(id)
    })
}
</script>
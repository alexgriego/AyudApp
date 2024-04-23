<template>
    <input type="text" class="form-control" placeholder="Ingrese ID o nombre de evento a buscar" v-model="search" />
    <div class="table table-striped table-hover">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Fecha de inicio</th>
                    <th scope="col">Fecha de fin</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.fecha_inicio }}</td>
                    <td>{{ item.fecha_fin || '-' }}</td>
                    <td>{{ item.es_finalizado ? 'Finalizado' : 'En proceso' }}</td>
                    <td>
                        <RouterLink :to="{ name: 'verJornada', params: { id: item.id } }" class="btn btn-info"><i
                                class="bi bi-search"></i></RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import InventarioStore from '@/stores/InventarioStore';
import type { EventoTypes } from '@/types/InventarioTypes';
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
const search = ref('')
const sesion = InventarioStore()
const data = ref([] as EventoTypes[])

watchEffect(async () => {
    search.value.length ? data.value = await sesion.buscarJornada(search.value) : data.value = await sesion.obtenerJornadas()
})
</script>
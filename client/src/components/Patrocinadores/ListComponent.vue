<template>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>NIT</th>
                <th>Razón social</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="patrocinador in data" :key="patrocinador.NIT">
                <td>{{ patrocinador.NIT }}</td>
                <td>{{ patrocinador.nombre }}</td>
                <td>
                    <RouterLink :to="{ name: 'editar-patrocinador', params: { NIT: patrocinador.NIT } }" type="button"
                        class="btn btn-info"><i class="bi bi-search"></i></RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import PatrocinadorStore from '@/stores/PatrocinadorStore';
import { ref, onMounted } from 'vue'
import type { PatrocinadorTypes } from '@/types/PatrocinadorTypes';
import SesionStore from '@/stores/SesionStore';
const data = ref([] as PatrocinadorTypes[])
const store = PatrocinadorStore()
const sesion = SesionStore()
onMounted(async () => {
    data.value = await store.obtenerPatrociandores()
    sesion.isLoading && sesion.alterLoading()
})
</script>
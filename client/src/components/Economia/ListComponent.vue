<template>
    <table class="table table-striped table-hover" v-if="data.length">
        <thead>
            <tr>
                <th scope="col">Patrocinador</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td>{{ item.patrocinador || 'No hay datos' }}</td>
                <td>$ {{ item.cantidad }}</td>
                <td>
                    <RouterLink :to="{ name: 'editarDinero', params: { id: item.id } }" class="btn btn-primary"><i
                            class="bi bi-search"></i></RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-else>
        <strong>404!</strong> No hay datos que mostrar.
    </div>
</template>
<script setup lang="ts">
import InventarioStore from '@/stores/InventarioStore';
import type { DineroTypes } from '@/types/InventarioTypes';
import { ref, watchEffect } from 'vue'
const store = InventarioStore()
const data = ref([] as DineroTypes[])
const search = ref<string>('')

watchEffect(async () => {
    !search.value.length ? (data.value = await store.obtenerDineros()) : (null);
})


</script>
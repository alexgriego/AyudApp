<template>
    <div class="mb-3">
        <input type="text" v-model="search" class="form-control" id="inputSearch"
            placeholder="Escriba código o nombre a buscar">
    </div>
    <table class="table table-striped table-hover" v-if="data.length">
        <thead>
            <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Opción</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.codigo">
                <th scope="row">{{ item.codigo }}</th>
                <td>{{ item.nombre }}</td>
                <td>{{ item.tipo }}</td>
                <td>{{ item.cantidad }}</td>
                <td>
                    <RouterLink :to="{ name: 'editarProducto', params: { codigo: item.codigo } }" type="button"
                        class="btn btn-info"><i class="bi bi-search"></i></RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import InventarioStore from '@/stores/InventarioStore';
import type { ProductoTypes } from '@/types/InventarioTypes';
import { ref, watchEffect } from 'vue'
const data = ref([] as ProductoTypes[]);
const store = InventarioStore();
const search = ref<string>('');

watchEffect(async () => {
    console.log(search.value);
    if (search.value.length > 0) {
        data.value = await store.obtenerProducto(search.value);
    } else {
        data.value = await store.obtenerProductos();
    }
})



</script>
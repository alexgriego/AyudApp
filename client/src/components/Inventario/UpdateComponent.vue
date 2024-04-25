<template>
    <div class="row">
        <div class="col">
            <h6>Datos del producto <button type="button" @click="borrarRegistro" class="btn btn-danger">Eliminar<i
                        class="bi bi-trash"></i></button>
            </h6>
        </div>
        <div class="col">
            <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success"
                :stye="{ margin: '0 0 250px 0' }">
                <input type="checkbox" class="custom-control-input" id="customSwitch3" v-model="switchEdit">
                <label class="custom-control-label" for="customSwitch3">
                    {{ switchEdit ? 'Deshabilitar edición' : 'Habilitar edición' }}
                </label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col col-auto">
            <p><strong>Cód: </strong>{{ data.codigo }}</p>
            <p><strong>Nombre: </strong>{{ data.nombre }}</p>
            <p><strong>Cantidad: </strong>{{ data.cantidad }}</p>
            <p><strong>Descripción: </strong>{{ data.descripcion }}</p>
            <p><strong>Tipo: </strong>{{ data.tipo }}</p>
            <p><strong>Es perecedero: </strong>{{ data.es_perecedero ? 'Sí' : 'No' }}</p>
            <p><strong>Fecha de vencimiento: </strong>{{ data.fecha_vencimiento || 'N/A' }}</p>
            <article>
                <h6>Detalles:</h6>
                <p>{{ data.descripcion }}</p>
            </article>
        </div>
        <div class="col col-auto" v-if="switchEdit">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Ingrese nuevos datos</h5>
                    <div class="card-text">
                        <FormComponent :data="data" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import InventarioStore from '@/stores/InventarioStore';
import type { ProductoTypes } from '@/types/InventarioTypes';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import FormComponent from './FormComponent.vue';
import { warningMessage } from '../messages';

const switchEdit = ref(false);
const url = useRouter()
const codigo = url.currentRoute.value.params.codigo
const store = InventarioStore();
const data = ref({} as ProductoTypes);
onMounted(async () => {
    data.value = (await store.obtenerProducto(codigo))[0];
})

const borrarRegistro = async () => {
    await warningMessage('¿Está seguro?', 'Este proceso no se puede deshacer', () => {
        store.eliminarProducto(codigo)
        url.push('/inventario')
    })
}
</script>
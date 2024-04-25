<template>
    <div class="row">
        <div class="col">
            <h5>Detalles de donación</h5>
        </div>
        <div class="col">
            <div class="flex flex-row">
                <div class="form-group">
                    <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success"
                        :stye="{ margin: '0 0 250px 0' }">
                        <input type="checkbox" class="custom-control-input" id="customSwitch3" v-model="switchEdit">
                        <label class="custom-control-label" for="customSwitch3">
                            {{ switchEdit ? 'Deshabilitar edición' : 'Habilitar edición' }}
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger" @click="eliminarRegistro">Eliminar</button>
                </div>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="card-text">
                        <p><strong>Patrocinador: </strong>{{ patrocinador }}</p>
                        <p><strong>Cantidad: </strong>$ {{ data.cantidad }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col" v-if="switchEdit">
            <FormComponent :data="data" />
        </div>
    </div>
</template>
<script setup lang="ts">
import InventarioStore from '@/stores/InventarioStore';
import type { DineroTypes } from '@/types/InventarioTypes';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import FormComponent from './FormComponent.vue';
const switchEdit = ref(false)
const url = useRouter()
const store = InventarioStore()
let id = url.currentRoute.value.params.id
const data = ref({} as DineroTypes)
const patrocinador = ref<string | null>('')


const eliminarRegistro = async () => {
    console.log(data.value.id)
    await store.eliminarDinero(data.value.id)
    url.push({ name: 'economia' })
}

onMounted(async () => {
    data.value = (await store.obtenerDinero(id))[0]
    patrocinador.value = data.value.patrocinador?.toString() ?? null;
})
</script>
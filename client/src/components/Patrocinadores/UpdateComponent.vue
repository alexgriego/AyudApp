<template>
    <div class="row">
        <div class="col col-auto">
            <h5>Datos del patrocinador
                <button type="button" class="btn btn-danger" @click="borrarRegistro">Borrar <i
                        class="bi bi-trash"></i></button>
            </h5>
            <div class="form-group">
                <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success"
                    :stye="{ margin: '0 0 250px 0' }">
                    <input type="checkbox" class="custom-control-input" id="customSwitch3" v-model="switchEdit">
                    <label class="custom-control-label" for="customSwitch3">
                        {{ switchEdit ? 'Deshabilitar edición' : 'Habilitar edición' }}
                    </label>
                </div>
            </div>
            <p><strong>NIT: </strong>{{ data.NIT }}</p>
            <p><strong>Razón social: </strong>{{ data.nombre }}</p>
            <p><strong>Dirección: </strong>{{ data.direccion }}</p>
            <p><strong>Ciudad: </strong>{{ data.ciudad }}</p>
            <p><strong>Teléfono: </strong>{{ data.telefono }}</p>
            <p><strong>Correo: </strong>{{ data.correo }}</p>
        </div>
        <div class="col" v-if="switchEdit">
            <FormComponent :data="data" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import PatrocinadorStore from '@/stores/PatrocinadorStore';
import type { PatrocinadorTypes } from '@/types/PatrocinadorTypes';
import FormComponent from './FormComponent.vue';
import { warningMessage } from '../messages';
const store = PatrocinadorStore()
const url = useRouter()
let NIT = Number(url.currentRoute.value.params.NIT)
const data = ref({} as PatrocinadorTypes)
const switchEdit = ref(false)
onMounted(async () => {
    NIT && (data.value = (await store.obtenerPatrocinador(NIT))[0])
})

const borrarRegistro = async () => {
    await warningMessage('¿Está seguro de borrar este registro?', 'Esta acción no se puede deshacer', () => {
        store.eliminarPatrocinador(NIT)
        url.push({ name: 'patrocinadores' })
    })
}
</script>
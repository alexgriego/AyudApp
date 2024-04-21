<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title mt-2 mb-2">
                <div class="row">
                    <div class="col col-lg-6">
                        <h5>Datos del beneficiario</h5>
                    </div>
                    <div class="col">
                        <div class="flex flex-row">
                            <div class="form-group">
                                <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success"
                                    :stye="{ margin: '0 0 250px 0' }">
                                    <input type="checkbox" class="custom-control-input" id="customSwitch3"
                                        v-model="switchEdit">
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
            </div>
            <div class="card-text">
                <div class="row">
                    <div class="col">
                        <p>Identificación: {{ data.identificacion }}</p>
                        <p>Nombre: {{ data.nombre }}</p>
                        <p>Apellido: {{ data.apellido }}</p>
                        <p>Edad: {{ data.edad }}</p>
                        <p>Fecha de nacimiento: {{ data.fecha_nacimiento }}</p>
                        <p>Estado civil: {{ data.estado_civil }}</p>
                        <p>Fecha de creación: {{ data.created_at }}</p>
                    </div>
                    <div class="col" v-if="switchEdit">
                        <FormComponent :data="data" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BeneficiarioStore from '@/stores/BeneficiariosStore'
import { useRouter } from 'vue-router'
import type { BeneficiarioTypes } from '@/types/BeneficiarioTypes';
import FormComponent from './FormComponent.vue';
import { successMessage, warningMessage } from '@/components/messages';
const eliminarRegistro = async () => {
    await warningMessage('¿Está seguro?', 'Tenga en cuenta que este proceso no se puede deshacer', () => {
        store.eliminarBeneficiario(identificacion)
        successMessage('Registro eliminado', 'El registro ha sido eliminado correctamente')
        url.push({ name: 'beneficiarios' })

    })
}

const store = BeneficiarioStore()
const url = useRouter()
const switchEdit = ref(false)
const identificacion = Number(url.currentRoute.value.params.identificacion)
const data = ref({} as BeneficiarioTypes)

const fecthData = async () => {
    await store.obtenerBeneficiario(identificacion)
        .then((Response) => {
            data.value = Response[0]
        })

}

fecthData()
</script>
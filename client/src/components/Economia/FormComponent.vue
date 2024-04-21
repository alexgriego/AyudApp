<template>
    <form @submit.prevent="handleSubmit">
        <div class="row">
            <div class="col col-auto">
                <div class="form-group">
                    <label for="patrocinador">Patrocinador <i class="bi bi-person"></i></label>
                    <input type="text" class="form-control form-control-border" id="patrocinador" name="patrocinador"
                        @input="handleChange" v-model="search" placeholder="Buscar patrocinador">
                    <div class="list-group list-group-flush">
                        <a v-for="patrocinador in patrocinadores_list" :key="patrocinador.NIT"
                            class="list-group-item list-group-item-action" @click="handleClic(patrocinador)">
                            {{ patrocinador.nombre }}
                        </a>
                    </div>
                    <div class="alert alert-secondary alert-dismissible fade show" role="alert"
                        v-if="patrocinadorSelected.NIT">
                        <strong>{{ patrocinadorSelected.nombre }}</strong> seleccionado.
                        <button type="button" class="btn btn-close btn-danger" data-bs-dismiss="alert"
                            aria-label="Close" @click="clearPatrocinador"><i class="bi bi-x"></i></button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="cantidad">Monto <i class="bi currency-dollar"></i></label>
                    <input type="number" class="form-control form-control-border" id="cantidad" name="cantidad"
                        @input="handleChange" v-model="data.cantidad" placeholder="Ingrese el monto"
                        :required="!data.cantidad">
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-success">
            Procesar <i class="bi bi-save"></i>
        </button>
    </form>
</template>
<script setup lang="ts">
import InventarioStore from '@/stores/InventarioStore';
import PatrocinadorStore from '@/stores/PatrocinadorStore';
import type { DineroTypes } from '@/types/InventarioTypes';
import type { PatrocinadorTypes } from '@/types/PatrocinadorTypes';
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router';
const store = PatrocinadorStore()
const donacion = InventarioStore()
const search = ref<number>(0)
const patrocinadores_list = ref([] as PatrocinadorTypes[])
const patrocinadorSelected = ref({} as PatrocinadorTypes)
const data = ref({} as DineroTypes)
const url = useRouter()

const props = defineProps<{
    data?: DineroTypes
}>()

watchEffect(async () => {
    if (props.data) {
        data.value = props.data
    }
    search.value && (patrocinadores_list.value = await store.obtenerPatrocinador(search.value))
})

const handleChange = (e: any) => {
    data.value = { ...data.value, [e.target.name]: e.target.value }
}

const handleClic = (data: any) => {
    patrocinadorSelected.value = data
}

const clearPatrocinador = () => {
    patrocinadorSelected.value = {} as PatrocinadorTypes
}

const handleSubmit = (e: any) => {
    e.preventDefault()
    let id = url.currentRoute.value.params.id

    if (!props.data) {
        patrocinadorSelected.value && (data.value = { ...data.value, patrocinador: patrocinadorSelected.value.NIT.toString() })
    }
    else {
        data.value = patrocinadorSelected.value ? ({ ...data.value, patrocinador: patrocinadorSelected.value.NIT.toString() }) : ({ ...data.value, patrocinador: id.toString() })
    }
    id ? donacion.actualizarDinero(id, data.value) : donacion.guardarDineros(data.value)
}
</script>
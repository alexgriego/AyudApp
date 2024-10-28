<template>
    <h6>Seleccione las personas que posee el lider a su cargo</h6>

    <div class="row">
        <div class="col">
            <div class="mb-3">
                <input type="text" class="form-control" id="inputSearch" placeholder="Ingrese identificacion a buscar"
                    v-model="search">
            </div>
            <div class="card" v-for="element in elementos" v-if="elementos.length">
                <div class="card-body">
                    <h5 class="card-title">{{ element.tipo_id + ' ' + element.identificacion }}</h5>
                    <div class="card-text">
                        <p>{{ element.nombre + ' ' + element.apellido }}</p>
                        <div class="mb-3">
                            <label for="inputParentezco" class="form-label">Parentesco</label>
                            <input type="text" class="form-control" v-model="parentezco" id="inputParentezco">
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary" @click="handleClick(element)"><i
                            class="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-else>
                <strong>404!</strong> No hay beneficiarios disponibles.
            </div>
        </div>
        <div class="col">
            <h6>Personas seleccionadas <button type="button" class="btn btn-success" @click="procesar">Procesar</button>
            </h6>
            <table class="table table-striped table-hover" v-if="data.length">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Relación</th>
                        <th scope="col">Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="reg in data">
                        <th scope="row">{{ reg.item.tipo_id + ' ' + reg.item.identificacion }}</th>
                        <td>{{ reg.item.nombre + " " + reg.item.apellido }}</td>
                        <td>{{ reg.parentezco }}</td>
                        <td>
                            <button class="btn btn-danger" @click="unselect(reg)"
                                :disabled="!!data.includes(reg.item.identificacion)"><i
                                    class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-else>
                <strong>404!</strong> No hay beneficiarios seleccionados.
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { warningMessage } from '@/components/messages';
import BeneficiarioStore from '@/stores/BeneficiariosStore';
import CensoStore from '@/stores/CensoStore';
import type { BeneficiarioTypes } from '@/types/BeneficiarioTypes';
import {
    onMounted, ref, watchEffect
} from 'vue';
const parentezco = ref('')
const censos = CensoStore()
const data = ref([] as any[])
const elementos = ref([] as BeneficiarioTypes[])
const copy = ref([] as BeneficiarioTypes[])
const search = ref('')
const store = BeneficiarioStore()
onMounted(() => {
    elementos.value = censos.relacionados
    copy.value = censos.relacionados
})

watchEffect(async () => {
    if (search.value.length > 3) {
        let aux = await store.obtenerBeneficiario(parseInt(search.value))
        elementos.value = aux.filter((element: BeneficiarioTypes) => !data.value.map((item) => item.item.identificacion).includes(element.identificacion) && !element.es_censado)
    }
    else {
        elementos.value = copy.value.filter((element: BeneficiarioTypes) => element.es_censado == false)
    }
})
const handleClick = (item: any) => {
    if (data.value.map((element) => element.item.identificacion).includes(item.identificacion)) {
        return
    }
    else {
        data.value.push({ item, parentezco: parentezco.value })
        parentezco.value = ''
        let aux = elementos.value.filter((element) => element.identificacion != item.identificacion)
        elementos.value = aux
    }
}

const unselect = (item: any) => {
    if (data.value.map((element) => element.item.identificacion).includes(item.item.identificacion)) {
        let aux = data.value.filter((element) => element.item.identificacion != item.item.identificacion)
        data.value = aux
    }
    else {
        let aux = data.value.filter((element) => element.item.identificacion != item.item.identificacion)
        data.value = aux
        elementos.value.push(item.item)
    }
}

const procesar = async () => {

    const json = {
        lider: censos.lider,
        /**de data añado todas lasidentificaciones y parentezcos a este array */
        relacionados: data.value.map((element) => {
            return {
                identificacion: element.item.identificacion,
                parentezco: element.parentezco
            }
        })
    }
    console.log(json)
    await warningMessage('¿Está seguro?', 'Una vez procesado no podrá modificar los datos, verifique antes de procesar.', () => { censos.añadirRelacionadosNuevos(json) })
}
</script>
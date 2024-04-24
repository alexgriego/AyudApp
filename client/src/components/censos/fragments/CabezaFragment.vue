<template>
    <form>

        <div class="form-group">
            <label for="search">Lider de casa</label>
            <input type="text" class="form-control" id="search" v-model="search"
                placeholder="Ingrese identificacion de beneficiario a seleccionar"
                :disabled="!!selected.identificacion">
        </div>
        <ul class="list-group" v-if="data.length" v-for="item in data">
            <li class="list-group-item" aria-current="true" @click="handleClick(item)">{{ item.identificacion }}
                - {{ item.nombre + ' ' +
                    item.apellido }} <i class="bi bi-check" v-if="selected.identificacion == item.identificacion"></i></li>

        </ul>
        <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="selected.identificacion">
            <strong>{{ selected.identificacion + ' - ' + selected.nombre + " " + selected.apellido }}</strong>
            seleccionado.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="unselect"><i
                    class="bi bi-x"></i></button>
        </div>

    </form>
</template>
<script setup lang="ts">
import BeneficiarioStore from '@/stores/BeneficiariosStore';
import CensoStore from '@/stores/CensoStore';
import type { BeneficiarioTypes } from '@/types/BeneficiarioTypes';
import { ref, watchEffect } from 'vue';
const search = ref('')
const store = BeneficiarioStore()
const censo = CensoStore()
const data = ref([] as BeneficiarioTypes[])
const selected = ref({} as BeneficiarioTypes)

watchEffect(() => {
    if (search.value.length > 3) {
        console.log(search.value, 'searching')
        store.obtenerBeneficiario(parseInt(search.value)).then((res) => {
            data.value = res
        })

    }
})

const unselect = () => {
    selected.value = {} as BeneficiarioTypes
    censo.eliminarLider()
}

const handleClick = (data: BeneficiarioTypes) => {
    selected.value = data

    censo.setearLider(data.identificacion)
}
</script>
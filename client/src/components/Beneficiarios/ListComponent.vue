<template>
    <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Ingrese ID a buscar"
            aria-label="Search" v-model="search">
        <div class="input-group-append">
            <button class="btn btn-navbar" type="submit" disabled>
                <i class="bi bi-search"></i>
            </button>
        </div>
    </div>
    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="!informacion.length">
        <strong>404!</strong> No hay datos que mostrar.
    </div>
    <div class="card" v-else>
        <div class="card-body">
            <div class="card-text">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in informacion">
                            <th scope="row">{{ item.tipo_id }} {{ item.identificacion }}</th>
                            <td>{{ item.nombre }} {{ item.apellido }}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <RouterLink
                                        :to="{ name: 'ver-datos-beneficiario', params: { identificacion: item.identificacion } }"
                                        type="button" class="btn btn-info"><i class="bi bi-search"></i>
                                    </RouterLink>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import BeneficiarioStore from '@/stores/BeneficiariosStore';
import { ref, watchEffect } from 'vue'
const search = ref<string>('')
const informacion = ref([] as any)
const datos = BeneficiarioStore()
watchEffect(async () => {
    if (search.value) {
        await datos.obtenerBeneficiario(parseInt(search.value))
            .then((Response) => {
                informacion.value = Response
                console.log(Response)
            })
    } else {
        await datos.obtenerBeneficiarios()
        informacion.value = datos.beneficiarios
    }
})
</script>
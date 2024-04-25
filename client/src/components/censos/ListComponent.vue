<template>
    <h5>Núcleos familiares identificados</h5>
    <div class="mb-3">
        <input type="email" class="form-control" id="inputSearch" v-model="search"
            placeholder="Indique Id de lider de familia">
    </div>
    <table class="table table-striped table-hover" v-if="elements.length">
        <thead>
            <tr>
                <th scope="col">ID Familia</th>
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in elements">
                <th scope="row">{{ item.beneficiario }}</th>
                <td>
                    <RouterLink :to="{ name: 'censo', params: { id: item.id } }" type="button" class="btn btn-success">
                        <i class="bi bi-search"></i>
<<<<<<< HEAD
                        </RouterLink>
=======
                    </RouterLink>
>>>>>>> alpha
                </td>
            </tr>
        </tbody>
    </table>
<<<<<<< HEAD
=======
    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-else>
        <strong>404!</strong> No hay registros que ver.
    </div>
>>>>>>> alpha
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { getFamilia, getFamilias } from '@/apis/familias.apis';
const search = ref('')
const elements = ref([] as any[])
watchEffect(async () => {
    if (search.value.length > 2) {
        const { data } = await getFamilia(Number(search.value))
        elements.value = data
    }
    else {
        const { data } = await getFamilias()
        elements.value = data
    }
})
</script>
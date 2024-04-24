<template>
    <div class="col col-auto">
        <CabezaFragment />
        <RelacionadosFragment v-if="censos.lider" />

    </div>
</template>
<script setup lang="ts">
import CensoStore from '@/stores/CensoStore';
import CabezaFragment from './fragments/CabezaFragment.vue';
import RelacionadosFragment from './fragments/RelacionadosFragment.vue';
const censos = CensoStore()
</script>
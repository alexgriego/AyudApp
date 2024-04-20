<template>
    <div class="col col-lg-8">
        <CardLayout :icon="custommers" :component="ListComponent" :header="'Beneficiarios'"
            :title="'Listado de beneficiarios'" :buttons="beneficiariosButtons" />
    </div>
</template>
<script setup lang="ts">
import custommers from '@/assets/json/custommers.json'
import ListComponent from '@/components/Beneficiarios/ListComponent.vue';
import CardLayout from '@/components/CardLayout.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
RedirectIfNotAuth()
const beneficiariosButtons = [
    {
        text: 'Añadir',
        link: '/beneficiarios/nuevo-beneficiario',
        icon: 'bi bi-person-plus',
        class: 'btn-sm btn-primary',
        type: 'link'
    }
]
</script>
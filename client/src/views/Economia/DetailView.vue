<template>
    <div class="col col-auto">
        <CardLayout :title="'Detalle de Dividendo'" :buttons="buttonLocal" :icon="EditDocument"
            :header="'Detalle de Dividendo'" :component="DetailComponent" />
    </div>
</template>
<script setup lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import EditDocument from '@/assets/json/EditDocument.json';
import DetailComponent from '@/components/Economia/DetailComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
let buttonLocal = [

    {
        text: 'Atrás',
        icon: 'bi bi-arrow-left',
        link: '/inventario/dineros',
        class: 'btn btn-sm btn-secondary',
        type: 'link'
    }

]

RedirectIfNotAuth()
</script>
<template>
    <div class="col col-lg-6">
        <CardLayout :icon="Document" :header="'Jornada'" :title="'Detalle de jornada'" :buttons="LocalButtons"
            :component="DetailComponent" />
    </div>
</template>
<script setup lang="ts">
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
import Document from '@/assets/json/Document.json'
import CardLayout from '@/components/CardLayout.vue';
import DetailComponent from '@/components/Jornadas/DetailComponent.vue';

const LocalButtons = [
    {
        text: 'Atrás',
        icon: 'bi bi-arrow-left',
        link: '/inventario/jornadas/',
        class: 'btn btn-sm btn-secondary',
        type: 'link'
    }

]

RedirectIfNotAuth()
</script>
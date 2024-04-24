<template>
    <div class="col col-lg-8">
        <CardLayout :title="'Censos'" :buttons="LocalButtons" :icon="Document" :header="'Detalle de Censo'"
            :component="DetailComponent" />
    </div>
</template>
<script setup lang="ts">
import Document from '@/assets/json/Document.json'
import CardLayout from '@/components/CardLayout.vue';
import DetailComponent from '@/components/censos/DetailComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';

let LocalButtons = [
    {
        text: 'Atrás',
        icon: 'bi bi-arrow-left',
        link: '/censos',
        class: 'btn btn-sm btn-secondary',
        type: 'link'
    }
]

RedirectIfNotAuth()
</script>
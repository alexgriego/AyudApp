<template>
    <div class="col col-lg-8">
        <CardLayout :icon="Meet" :header="'Patrocinadores'" :title="'Listado de patrocinadores'" :buttons="buttonsList"
            :component="ListComponent" />
    </div>
</template>
<script setup lang="ts">
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
import CardLayout from '@/components/CardLayout.vue';
import Meet from '@/assets/json/Meet.json'
import ListComponent from '@/components/Patrocinadores/ListComponent.vue';
let buttonsList = [
    {
        text: 'Nuevo',
        icon: 'bi bi-plus',
        link: '/patrocinadores/crear',
        class: 'btn btn-sm btn-primary',
        type: 'link'
    }
]
RedirectIfNotAuth()
</script>
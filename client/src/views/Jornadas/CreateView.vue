<template>
    <div class="col col-lg-6">
        <CardLayout :icon="demmands" :header="'Jornadas'" :title="'Crear jornada'" :buttons="ListButtons"
            :component="CreateComponent" />
    </div>
</template>
<script setup lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import demmands from '@/assets/json/demands.json';
import CreateComponent from '@/components/Jornadas/CreateComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';

let ListButtons = [
    {
        text: 'Volver',
        icon: 'bi bi-arrow-left',
        link: '/jornadas',
        class: 'btn btn-sm btn-primary',
        type: 'link'
    }
]

RedirectIfNotAuth();
</script>
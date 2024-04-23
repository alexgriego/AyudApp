<template>
    <div class="col col-lg-6">
        <CardLayout :icon="demmands" :header="'Jornadas'" :title="'Listado de jornadas'" :buttons="ListButtons"
            :component="ListComponent" />
    </div>
</template>
<script setup lang="ts">
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
import CardLayout from '@/components/CardLayout.vue';
import demmands from '@/assets/json/demands.json';
import ListComponent from '@/components/Jornadas/ListComponent.vue';

let ListButtons = [
    {
        text: 'Nuevo',
        icon: 'bi bi-plus',
        link: '/inventario/jornadas/crear',
        class: 'btn btn-sm btn-primary',
        type: 'link'
    }
]

RedirectIfNotAuth();

</script>
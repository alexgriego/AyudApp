<template>
    <div class="col col-lg-8">
        <CardLayout :title="'Censos'" :buttons="ListButtons" :icon="protest" :header="'Listado de Familias en sistema'"
            :component="ListComponent" />

    </div>
</template>
<script setup lang="ts">
import protest from '@/assets/json/protest.json'
import CardLayout from '@/components/CardLayout.vue';
import ListComponent from '@/components/censos/ListComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';

let ListButtons = [

    {
        text: 'Nuevo',
        icon: 'bi bi-plus',
        link: '/censos/nuevo',
        class: 'btn btn-sm btn-primary',
        type: 'link'
    }

]

RedirectIfNotAuth()
</script>
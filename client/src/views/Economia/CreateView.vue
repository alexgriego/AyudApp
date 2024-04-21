<template>
    <CardLayout :title="'Añadir donación'" :buttons="CreateButtons" :icon="PlusCircle" :header="'Donaciones económicas'"
        :component="CreateComponent" />
</template>
<script setup lang="ts">
import PlusCircle from '@/assets/json/PlusCircle.json'
import CreateComponent from '@/components/Economia/CreateComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
import CardLayout from '@/components/CardLayout.vue';
const CreateButtons = [
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
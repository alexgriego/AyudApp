<template>
    <div class="col col-lg-8">
        <CardLayout :title="'Añadir Patrocinador'" :icon="EditDocument" :component="FormComponent" :buttons="buttons"
            :header="'Patrocinadores'" />
    </div>
</template>
<script setup lang="ts">
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
import EditDocument from '@/assets/json/EditDocument.json'
import CardLayout from '@/components/CardLayout.vue';
import FormComponent from '@/components/Patrocinadores/FormComponent.vue';
const buttons = [
    {
        text: 'Cancelar',
        icon: 'bi bi-x',
        link: '/patrocinadores',
        class: 'btn btn-sm btn-danger',
        type: 'link'
    }
]
RedirectIfNotAuth()
</script>
<template>
    <div class="col col-lg-auto">
        <CardLayout :title="'Actualizar Patrocinador'" :icon="EditDocument" :component="UpdateComponent"
            :buttons="buttons" :header="'Patrocinadores'" />
    </div>
</template>
<script setup lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import EditDocument from '@/assets/json/EditDocument.json'
import UpdateComponent from '@/components/Patrocinadores/UpdateComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
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
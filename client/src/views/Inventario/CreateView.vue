<template>
    <div class="col col-lg-8">
        <CardLayout :title="'Crear Producto'" :header="'Inventario'" :buttons="buttonsList" :icon="EditDocument"
            :component="CreateComponent" />
    </div>
</template>
<script setup lang="ts">
import CreateComponent from '@/components/Inventario/CreateComponent.vue';
import CardLayout from '@/components/CardLayout.vue';
import EditDocument from '@/assets/json/EditDocument.json'
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
let buttonsList = [
    {
        text: 'Volver',
        icon: 'bi bi-arrow-left',
        link: '/inventario',
        class: 'btn btn-sm btn-secondary',
        type: 'link'
    }
]
RedirectIfNotAuth()
</script>
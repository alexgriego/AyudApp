<template>
    <div class="col col-auto">
        <CardLayout :title="'Editar Producto'" :icon="EditDocument" :buttons="editButtons" :component="UpdateComponent"
            :header="'Editar Producto'" />

    </div>
</template>
<script setup lang="ts">
import EditDocument from '@/assets/json/EditDocument.json';
import CardLayout from '@/components/CardLayout.vue';
import UpdateComponent from '@/components/Inventario/UpdateComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
let editButtons = [
    {
        text: 'Cancelar',
        type: 'link',
        class: 'btn btn-sm btn-secondary',
        icon: 'bi bi-arrow-left',
        link: '/inventario'
    }
]

RedirectIfNotAuth()

</script>
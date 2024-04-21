<template>
    <div class="col col-lg-6">
        <CardLayout :title="'Listado de Productos'" :header="'Inventario'" :buttons="ListButtons" :icon="Book"
            :component="ListComponent" />
    </div>
</template>
<script setup lang="ts">
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
import Book from '@/assets/json/Book.json'
import CardLayout from '@/components/CardLayout.vue';
import ListComponent from '@/components/Inventario/ListComponent.vue';
let ListButtons = [
    {
        text: 'Nuevo',
        icon: 'bi bi-plus',
        link: '/inventario/crear',
        class: 'btn btn-sm btn-primary',
        type: 'link'
    }
]

RedirectIfNotAuth();
</script>
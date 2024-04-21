<template>
    <div class="col col-lg-6">
        <CardLayout :title="'Dividendos'" :buttons="ListButtons" :icon="dividends"
            :header="'Listado de ayudas económicas'" :component="ListComponent" />
    </div>

</template>
<script setup lang="ts">
import dividends from '@/assets/json/diviends.json'
import CardLayout from '@/components/CardLayout.vue';
import ListComponent from '@/components/Economia/ListComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
const ListButtons = [
    {
        text: 'Nuevo',
        icon: 'bi bi-plus',
        link: '/inventario/dineros/crear',
        class: 'btn btn-sm btn-primary',
        type: 'link'
    }
]

RedirectIfNotAuth()
</script>
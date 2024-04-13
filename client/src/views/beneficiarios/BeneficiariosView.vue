<template>
    <div class="col col-lg-6">
        <CardLayout :icon="custommers" :component="ListComponent" :header="'Beneficiarios'"
            :title="'Listado de beneficiarios'" :buttons="null" />
    </div>
</template>
<script setup lang="ts">
import custommers from '@/assets/json/custommers.json'
import ListComponent from '@/components/Beneficiarios/ListComponent.vue';
import CardLayout from '@/components/CardLayout.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
RedirectIfNotAuth()
</script>
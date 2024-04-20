<template>
    <div class="col col-lg-8">
        <CardLayout :icon="EditDocument" :component="CreateComponent" :header="'Beneficiarios'"
            :title="'Nuevo beneficiario'" :buttons="buttonComponent" />
    </div>
</template>
<script setup lang="ts">
import EditDocument from '@/assets/json/EditDocument.json'
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
import CardLayout from '@/components/CardLayout.vue';
import CreateComponent from '@/components/Beneficiarios/CreateComponent.vue';
RedirectIfNotAuth()
const buttonComponent = [
    {
        text: 'Cancelar',
        icon: 'bi bi-x',
        class: 'btn-sm btn-danger',
        type: 'link',
        link: '/beneficiarios'
    }
]
</script>
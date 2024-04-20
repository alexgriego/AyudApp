<template>
    <div class="col col-lg-8">
        <CardLayout :title="'Actualizar beneficiario'" :icon="EditDocument" :header="'Editar datos de beneficiario'"
            :component="UpdateComponent" :buttons="UpdateButtons" />

    </div>
</template>
<script setup lang="ts">
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
import CardLayout from '@/components/CardLayout.vue';
import EditDocument from '@/assets/json/EditDocument.json';
import UpdateComponent from '@/components/Beneficiarios/UpdateComponent.vue';
RedirectIfNotAuth();

const UpdateButtons = [
    {
        text: 'Cancelar',
        icon: 'bi bi-x',
        class: 'btn-sm btn-danger',
        type: 'link',
        link: '/beneficiarios'
    }

]


</script>
<template>
    <div class="col col-lg-8">
        <CardLayout :title="'Censos'" :buttons="CreateButtons" :icon="consultation" :header="'Nuevo Censo'"
            :component="CreateComponent" />
    </div>
</template>
<script setup lang="ts">
import consultation from '@/assets/json/consultation.json'
import CardLayout from '@/components/CardLayout.vue';
import CreateComponent from '@/components/censos/CreateComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';

let CreateButtons = [

    {
        text: 'Atrás',
        icon: 'bi bi-arrow-left',
        link: '/censos',
        class: 'btn btn-sm btn-secondary',
        type: 'submit'
    }

]

RedirectIfNotAuth()
</script>
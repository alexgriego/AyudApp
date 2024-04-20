<template>
    <div class="col col-auto">
        <CardLayout :icon="Avatar" :header="'Datos de beneficiario'" :title="'Datos de beneficiario'" :buttons="null"
            :component="DetailComponent" />
    </div>
</template>
<script setup lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import Avatar from '@/assets/json/Avatar.json';
import DetailComponent from '@/components/Beneficiarios/DetailComponent.vue';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';


RedirectIfNotAuth()

</script>
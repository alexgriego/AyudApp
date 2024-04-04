<template>
    <CardLayout :component="LoginComponent" :buttons="null" :header="'Iniciar Sesión'"
        :title="'Ingrese sus credenciales'" />

</template>

<script setup lang="ts">
import LoginComponent from '@/components/Auth/LoginComponent.vue'
import CardLayout from '@/components/CardLayout.vue';
import { RedirectIfAuth } from '@/middleware/SesionMiddleware'
RedirectIfAuth();
</script>
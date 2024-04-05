<template>
    <div class="col col-lg-6">
        <CardLayout :component="LoginComponent" :buttons="null" :header="'Iniciar Sesión'"
            :title="'Ingrese sus credenciales'" :icon="Fingerprint" />

    </div>
</template>

<script setup lang="ts">
import LoginComponent from '@/components/Auth/LoginComponent.vue'
import CardLayout from '@/components/CardLayout.vue';
import { RedirectIfAuth } from '@/middleware/SesionMiddleware'
import Fingerprint from '@/assets/json/Fingerprint.json'

RedirectIfAuth();
</script>
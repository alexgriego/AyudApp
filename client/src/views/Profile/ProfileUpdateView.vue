<template>
    <div class="col col-lg-6">
        <CardLayout :title="'Actualizar Perfil'" :buttons="ProfileButtons" :component="UpdateProfileData"
            :icon="EditDocument" :header="'Actualizar Perfil'" />
    </div>
</template>
<script setup lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import UpdateProfileData from '@/components/Profile/UpdateProfileData.vue';
import EditDocument from '@/assets/json/EditDocument.json';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
RedirectIfNotAuth();
const ProfileButtons = [
    {
        text: 'Cancelar',
        link: '/profile',
        icon: 'bi bi-x-circle',
        class: 'btn-sm btn-danger',
        type: 'link'
    }
]
</script>
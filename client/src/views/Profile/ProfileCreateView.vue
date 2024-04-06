<template>
    <div class="col col-lg-6">
        <CardLayout :title="'Perfil'" :buttons="ProfileButtons" :component="AddProfileData" :icon="EditDocument"
            :header="'Perfil de usuario'" />
    </div>
</template>
<script setup lang="ts">
import AddProfileData from '@/components/Profile/AddProfileData.vue';
import CardLayout from '@/components/CardLayout.vue';
import EditDocument from '@/assets/json/EditDocument.json'
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
RedirectIfNotAuth()
const ProfileButtons = [
    {
        text: 'Atrás',
        link: '/profile',
        icon: 'bi bi-arrow-left',
        class: 'btn-sm btn-secondary',
        type: 'link'
    }
]
</script>
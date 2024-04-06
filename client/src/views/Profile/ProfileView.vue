<template>
    <div class="col col-lg-6">
        <CardLayout :title="'Perfil'" :buttons="ProfileButtons" :component="ProfileComponent" :icon="Avatar"
            :header="'Perfil de usuario'" />
    </div>
</template>
<script setup lang="ts">
import ProfileComponent from '@/components/Profile/ProfileComponent.vue';
import CardLayout from '@/components/CardLayout.vue';
import Avatar from '@/assets/json/Avatar.json'
import UserStore from '@/stores/UserStore';
import { RedirectIfNotAuth } from '@/middleware/SesionMiddleware';
const user = UserStore()
RedirectIfNotAuth()
const ProfileButtons = [
    !user.user.uid ? ({
        text: 'Añadir',
        link: '/profile/add-data',
        icon: 'bi bi-user-plus',
        class: 'btn-sm btn-primary',
        type: 'link'
    }) : ({
        text: 'Editar',
        link: '/profile/edit-data',
        icon: 'bi bi-pencil-square',
        class: 'btn-sm btn-warning',
        type: 'link'
    })
]
</script>
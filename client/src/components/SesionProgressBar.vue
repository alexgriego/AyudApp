<template>
    <button type="button"
        :class="sesion.timer < 1800 ? (sesion.timer <= 1350 ? 'btn btn-secondary' : 'btn btn-warning') : 'btn btn-danger'"
        disabled>
        <i
            :class="sesion.timer < 1800 ? (sesion.timer <= 1350 ? 'bi bi-check-circle-fill' : 'bi bi-exclamation-circle-fill') : 'bi bi-x-circle-fill'"></i>
    </button>
</template>
<script setup lang="ts">
import SesionStore from '@/stores/SesionStore';
import { watchEffect } from 'vue';
import { warningMessage } from './messages';
const sesion = SesionStore()
watchEffect(() => {
    sesion.timer === 1800 && sesion.logout()
    sesion.timer == 1450 && warningMessage('¿Estás ahí?', 'Tu sesión está a punto de expirar, confirma que sigues ahí para evitar eso', sesion.solicitarNuevoPAT)
})  
</script>
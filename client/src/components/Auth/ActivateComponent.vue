<template>
    <p>Para activar su cuenta, haga clic <button type="button" class="btn btn-outline-success"
            @click="handleClick">Aquí</button></p>
</template>
<script setup lang="ts">
import SesionStore from '@/stores/SesionStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import type { ActivateTypes } from '@/types/SesionTypes';
const url = useRouter();
const data = ref({
    token: url.currentRoute.value.params.token,
    uid: url.currentRoute.value.params.uid
} as ActivateTypes);

const handleClick = () => {
    SesionStore().activarCuenta(data.value);
}
</script>
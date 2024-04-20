<template>
    <FormComponent />
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
import BeneficiarioStore from '@/stores/BeneficiariosStore';
import FormComponent from './FormComponent.vue';

const store = BeneficiarioStore()
const router = useRouter()
const identificacion = Number(router.currentRoute.value.params.identificacion)
onMounted(async () => {
    await store.obtenerBeneficiario(identificacion)
})
</script>
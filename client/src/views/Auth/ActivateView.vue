<template>
    <div class="col col-lg-6">
        <CardLayout :title="'Activar Cuenta'" :buttons="null" :component="ActivateComponent" :icon="PlusCircle"
            :header="'Activación de cuenta'" />
    </div>
</template>
<script setup lang='ts'>
import ActivateComponent from '@/components/Auth/ActivateComponent.vue';
import CardLayout from '@/components/CardLayout.vue';
import PlusCircle from '@/assets/json/PlusCircle.json'
</script>
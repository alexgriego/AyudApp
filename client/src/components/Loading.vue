<template>
    <CardLayout :buttons="null" :icon="COMMS" :component="null" :title="'Espere...'" :header="'Un momento por favor'" />
</template>
<script setup lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import COMMS from '@/assets/json/COMMS.json'
</script>
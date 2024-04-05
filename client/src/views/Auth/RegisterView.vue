<template>
    <div class="col col-lg-7">
        <CardLayout :component="RegisterComponent" :data="EditDocument" :buttons="null" :header="'Registro de usuarios'"
            :title="'Ingrese los datos solicitados'" :icon="EditDocument" />
    </div>
</template>
<script setup lang="ts">
import RegisterComponent from '@/components/Auth/RegisterComponent.vue'
import CardLayout from '@/components/CardLayout.vue';
import EditDocument from '@/assets/json/EditDocument.json'

</script>
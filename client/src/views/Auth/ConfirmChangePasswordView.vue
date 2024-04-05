<template>
    <div class="col col-lg-7">
        <CardLayout :icon="EditDocument" :header="'Confirmar cambio de contraseña'"
            :title="'Confirmación de cambio de contraseña'" :component="ConfirmChangePasswordComponent"
            :buttons="null" />
    </div>
</template>
<script setup lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import EditDocument from '@/assets/json/EditDocument.json'
import ConfirmChangePasswordComponent from '@/components/Auth/ConfirmChangePasswordComponent.vue';

</script>
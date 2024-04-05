<template>
    <div class="col col-lg-7">
        <CardLayout :icon="SendMail" :header="'Cambiar contraseña'" :title="'Cambio de contraseña'"
            :component="ChangePasswordComponent" :buttons="null" />
    </div>
</template>
<script setup lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import SendMail from '@/assets/json/SendMail.json'
import ChangePasswordComponent from '@/components/Auth/ChangePasswordComponent.vue';
</script>
<template>
    <div class="card">
        <div class="card-body">
            <h4>Ingrese los datos solicitados</h4>
            <FormComponent :data="null" />
        </div>
    </div>
</template>
<script setup lang="ts">
import FormComponent from './FormComponent.vue';

</script>
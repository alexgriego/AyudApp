<template>
  <div @mousemove="sesion.solicitarNuevoPAT">
    <Navbar :dateTime="dateTime" />
    <div class="row justify-content-md-center">
      <Loading v-if="sesion.isLoading" />
      <RouterView v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './fragments/Navbar.vue';
import Loading from '@/components/Loading.vue';
import SesionStore from './stores/SesionStore';
import { ref, watchEffect } from 'vue';
const dateTime = ref<string>('')
const sesion = SesionStore()
watchEffect(() => {
  setInterval(() => {
    const date = new Date()
    dateTime.value = date.toLocaleString()
    sesion.isLogged && sesion.incrementTimer()
  }, 1000)
})
</script>
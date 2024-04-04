<template>
  <Navbar />
  <div class="row justify-content-md-center">
    <Loading v-if="sesion.isLoading" />
    <RouterView v-else />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './fragments/Navbar.vue';
import Loading from '@/components/Loading.vue';
import SesionStore from './stores/SesionStore';
const sesion = SesionStore()
</script>
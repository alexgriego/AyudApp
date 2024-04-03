<template>
  <Navbar />
  <div class="row justify-content-md-center">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './fragments/Navbar.vue';

</script>
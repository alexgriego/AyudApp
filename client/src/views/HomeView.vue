<script setup lang="ts">
import HomeComponent from '@/components/Home/HomeComponent.vue';
import SesionStore from '@/stores/SesionStore';
import { watchEffect, ref } from 'vue';

const store = SesionStore()
const isLogged = ref(store.isLogged)

</script>

<template>
    <div v-if="isLogged" class="row">
        <HomeComponent />
    </div>

    <div v-else class="col col-lg-5">
        <div class="card">

            <div class="card-body">
                <h5 class="card-title">
                    ¡Bienvenido a AyudApp!
                </h5>
                <p class="card-text">
                    Por favor inicie sesión para continuar.
                </p>
            </div>
        </div>
    </div>

</template>

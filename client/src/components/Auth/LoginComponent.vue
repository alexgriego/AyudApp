<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="username">Usuario <i class="bi bi-person-badge"></i></label>
            <input type="text" class="form-control form-control-border" id="username" placeholder="Ej. john.doe"
                name="username" @input="handleChange" required>
        </div>
        <div class="form-group">
            <label for="password">Contraseña <i class="bi bi-key-fill"></i></label>
            <input type="password" class="form-control form-control-border" id="password"
                placeholder="Ingrese su contraseña" @input="handleChange" name="password" required>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="submit" class="btn btn-success">
                Entrar<i class="bi bi-door-open"></i>
            </button>
            <RouterLink :to="{ name: 'forgot-password' }" class="btn btn-warning">
                ¿Olvidaste tu contraseña? <i class="bi bi-question-circle"></i>

            </RouterLink>
        </div>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { CredentialsTypes } from '@/types/SesionTypes';
import { RouterLink } from 'vue-router';
import SesionStore from '@/stores/SesionStore';
const store = SesionStore();
const data = ref({} as CredentialsTypes);
const handleChange = (e: any) => {
    data.value = {
        ...data.value,
        [e.target.name]: e.target.value
    }
}

const handleSubmit = (e: any) => {
    e.preventDefault()
    store.login(data.value)
}
</script>
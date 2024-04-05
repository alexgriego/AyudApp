<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="username">Usuario <i class="bi bi-person-badge"></i></label>
            <input type="text" class="form-control form-control-border" id="username" placeholder="Ej. john.doe"
                name="username" @input="handleChange" required>
        </div>
        <div class="form-group">
            <label for="password">Contraseña <i class="bi bi-key"></i></label>
            <input type="password" class="form-control form-control-border" id="password"
                placeholder="Escriba su contraseña" name="password" @input="handleChange" required>
        </div>
        <div class="form-group">
            <label for="re_password">Repita su contraseña <i class="bi bi-key-fill"></i></label>
            <input type="password" class="form-control form-control-border" id="re_password"
                placeholder="Vuelva a escribir su contraseña" name="re_password" @input="handleChange" required>
        </div>
        <article class="mt-2 mb-2">
            <div class="alert alert-warning alert-dismissible fade show" role="alert"
                v-if="data.password !== data.re_password">
                <strong>Error!</strong> Las contraseñas no coinciden.
            </div>
        </article>
        <div class="form-group">
            <label for="email">Correo <i class="bi bi-envelope-at"></i></label>
            <input type="email" class="form-control form-control-border" id="email" placeholder="Ej. johndoe@mail.co"
                name="email" @input="handleChange" required>
        </div>
        <button type="submit" class="btn btn-success">
            Registrarse <i class="bi bi-person-plus"></i>
        </button>
    </form>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import SesionStore from '@/stores/SesionStore';
import type { RegisterTypes } from '@/types/SesionTypes';
const data = ref({ username: '', password: '', re_password: '', email: '' } as RegisterTypes);

const handleChange = (e: any) => {
    data.value = {
        ...data.value,
        [e.target.name]: e.target.value
    }
}

const handleSubmit = () => {
    SesionStore().registrarUsuario(data.value);
}
</script>
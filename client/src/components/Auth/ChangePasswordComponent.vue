<template>
    <form @submit.prevent="handleSubmit">
        <article>
            <p>Para cambiar la contraseña, ingrese su correo electrónico. Si este se encuentra asociado a una cuenta, se
                enviará un correo electrónico con instrucciones para realizar el cambio.</p>
            <div class="form-group">
                <label for="email">Correo <i class="bi bi-envelope-at"></i></label>
                <input type="text" class="form-control form-control-border" id="email" placeholder="Ej. john.doe"
                    name="email" @input="handleChange" required>
            </div>
            <button type="submit" class="btn btn-success" :disabled="!email">Enviar <i class="bi bi-send"></i></button>
        </article>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SesionStore from '@/stores/SesionStore';
const email = ref<string>('')
const handleChange = (e: Event) => {
    email.value = (e.target as HTMLInputElement).value
}

const handleSubmit = (e: Event) => {
    e.preventDefault()
    SesionStore().cambiarContraseña(email.value)
}
</script>
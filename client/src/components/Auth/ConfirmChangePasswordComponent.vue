<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="new_password">Contraseña <i class="bi bi-key"></i></label>
            <input type="password" class="form-control form-control-border" id="new_password"
                placeholder="Ingrese su contraseña" name="new_password" @input="handleChange" required>
        </div>
        <div class="form-group">
            <label for="re_new_password">Confirme su contraseña <i class="bi bi-key-fill"></i></label>
            <input type="password" class="form-control form-control-border" id="re_new_password"
                placeholder="Repita su contraseñ" name="re_new_password" @input="handleChange" required>
        </div>
        <div class="alert alert-danger alert-dismissible fade show" role="alert"
            v-if="data.new_password !== data.re_new_password">
            <strong>Error!</strong> Las contraseñas no coinciden.

        </div>
        <button type="submit" class="btn btn-success" :disabled="data.new_password !== data.re_new_password">Guardar <i
                class="bi bi-save"></i></button>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SesionStore from '@/stores/SesionStore';
import type { ChangePasswordConfirmTypes } from '@/types/SesionTypes';
const url = useRouter()
const sesion = SesionStore()
const data = ref({ new_password: '', re_new_password: '', uid: url.currentRoute.value.params.uid, token: url.currentRoute.value.params.token } as ChangePasswordConfirmTypes);
const handleChange = (e: any) => {
    data.value = {
        ...data.value,
        [e.target.name]: e.target.value
    }
}

const handleSubmit = () => {
    sesion.guardarNuevaContraseña(data.value);
}

</script>
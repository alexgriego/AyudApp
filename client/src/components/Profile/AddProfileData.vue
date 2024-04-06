<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="CC" class="form-label">Cédula <i class="bi bi-person-vcard-fill"></i></label>
            <input type="number" class="form-control" id="CC" name="uid" @input="handleInput" required />
        </div>

        <div class="row">
            <div class="col col-lg-6">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre <i class="bi bi-body-text"></i></label>
                    <input type="text" class="form-control" id="nombre" name="first_name" @input="handleInput"
                        required />
                </div>
            </div>
            <div class="col col-lg-6">
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido <i class="bi bi-body-text"></i></label>
                    <input type="text" class="form-control" id="apellido" name="last_name" @input="handleInput"
                        required />
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col col-lg-6">
                <div class="mb-3">
                    <label for="address" class="form-label">Dirección <i class="bi bi-geo"></i></label>
                    <input type="text" class="form-control" id="address" name="address" @input="handleInput" />
                </div>
            </div>
            <div class="col col-lg-6">
                <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono <i class="bi bi-phone"></i></label>
                    <input type="text" class="form-control" id="telefono" name="phone" @input="handleInput" />
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="direccion" class="form-label">Ciudad <i class="bi bi-map"></i></label>
            <input type="text" class="form-control" id="direccion" name="address" @input="handleInput" />
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>
<script setup lang="ts">
import UserStore from '@/stores/UserStore';
import type { UserFormTypes } from '@/types/ProfileTypes';
import { ref } from 'vue';
const data = ref({} as UserFormTypes);
const usuario = UserStore();
const handleInput = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    data.value = { ...data.value, [name]: value };
}

const handleSubmit = (e: Event) => {
    e.preventDefault();
    usuario.guardarDatosUsuario(data.value);
}
</script>
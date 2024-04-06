<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="CC" class="form-label">Cédula <i class="bi bi-person-vcard-fill"></i></label>
            <input type="number" class="form-control" id="CC" name="uid" :value="usuario.user.uid" @input="handleInput"
                required />
        </div>

        <div class="row">
            <div class="col col-lg-6">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre <i class="bi bi-body-text"></i></label>
                    <input type="text" class="form-control" id="nombre" name="first_name"
                        :value="usuario.user.first_name" @input="handleInput" required />
                </div>
            </div>
            <div class="col col-lg-6">
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido <i class="bi bi-body-text"></i></label>
                    <input type="text" class="form-control" id="apellido" name="last_name"
                        :value="usuario.user.last_name" @input="handleInput" required />
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col col-lg-6">
                <div class="mb-3">
                    <label for="address" class="form-label">Dirección <i class="bi bi-geo"></i></label>
                    <input type="text" class="form-control" id="address" name="address" :value="usuario.user.address"
                        @input="handleInput" />
                </div>
            </div>
            <div class="col col-lg-6">
                <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono <i class="bi bi-phone"></i></label>
                    <input type="text" class="form-control" id="telefono" name="phone" :value="usuario.user.phone"
                        @input="handleInput" />
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="direccion" class="form-label">Ciudad <i class="bi bi-map"></i></label>
            <input type="text" class="form-control" id="direccion" name="city" :value="usuario.user.city"
                @input="handleInput" />
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>
<script setup lang="ts">
import UserStore from '@/stores/UserStore';
import type { UserFormTypes } from '@/types/ProfileTypes';
import { ref } from 'vue';
import { warningMessage } from '../messages';
const data = ref({} as UserFormTypes);
const usuario = UserStore();
const handleInput = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    data.value = { ...data.value, [name]: value };
}

const handleSubmit = (e: Event) => {
    e.preventDefault();
    warningMessage('¿Estás seguro de actualizar tu perfil?', 'Esta acción no se puede deshacer', () => { usuario.guardarDatosUsuario(data.value) });
    console.log(data.value)
}
</script>
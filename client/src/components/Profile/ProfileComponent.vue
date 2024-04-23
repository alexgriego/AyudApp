<template>
    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="!usuario.user.uid">
        <strong>404!</strong> No hay datos que mostrar.
    </div>
    <div class="card" v-else>
        <div class="card-body">
            <div class="card-text">
                <div class="row">
                    <div class="mb-3">
                        <h3>Rol de usuario : {{
                            group || (usuario.user.is_superuser ? 'SuperUsuario' : 'Invitado') }} <i
                                class="bi bi-patch-check-fill"></i>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="mb-3">
                    <label for="CC" class="form-label">Cédula <i class="bi bi-person-vcard-fill"></i></label>
                    {{ usuario.user.uid }}
                </div>
            </div>
            <div class="row">
                <div class="col col-lg-6">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre <i class="bi bi-body-text"></i></label>
                        {{ usuario.user.first_name }}
                    </div>
                </div>
                <div class="col col-lg-6">
                    <div class="mb-3">
                        <label for="apellido" class="form-label">Apellido <i class="bi bi-body-text"></i></label>
                        {{ usuario.user.last_name }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-lg-6">
                    <div class="mb-3">
                        <label for="address" class="form-label">Dirección <i class="bi bi-geo"></i></label>
                        {{ usuario.user.address }}
                    </div>
                </div>
                <div class="col col-lg-6">
                    <div class="mb-3">
                        <label for="address" class="form-label">Teléfono <i class="bi bi-phone"></i></label>
                        {{ usuario.user.phone }}
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col col-lg-6">
                    <div class="mb-3">
                        <label for="telefono" class="form-label">Correo <i class="bi bi-phone"></i></label>
                        {{ usuario.user.email }}
                    </div>
                </div>
                <div class="col col-lg-6">
                    <div class="mb-3">
                        <label for="direccion" class="form-label">Ciudad <i class="bi bi-map"></i></label </div>
                        {{ usuario.user.city }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import UserStore from '@/stores/UserStore';
const usuario = UserStore()
const group = usuario.user.groups[0]
console.log(group)
</script>
<template>
    <!-- Navbar -->
    <nav class="main-header ml-0 mb-2 navbar navbar-expand-md navbar-light navbar-white">
        <div class="container">
            <div class="navbar-brand">
                <span class="brand-text font-weight-light">AyudApp <i class="bi bi-postcard-heart"></i></span>
            </div>

            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse order-3" id="navbarCollapse" v-if="sesion.isLogged">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link">Inicio <i class="bi bi-house"></i>
                        </RouterLink>
                    </li>
                    <!--Personas-->
                    <li class="nav-item dropdown"
                        v-if="(usuario.userGroup === 'Administrador' || usuario.userGroup === 'Encuestador' || usuario.userGroup === 'Bodeguista')">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" class="nav-link dropdown-toggle">Personas <i
                                class="bi bi-person-circle"></i></a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                            <li>
                                <RouterLink :to="{ name: 'beneficiarios' }" class="dropdown-item">Beneficiarios <i
                                        class="bi bi-person"></i></RouterLink>
                            </li>
                            <li v-if="usuario.userGroup === 'Administrador' || usuario.userGroup === 'Bodeguista'">
                                <RouterLink :to="{ name: 'patrocinadores' }" class="dropdown-item">Patrocinadores <i
                                        class="bi bi-building"></i> </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <!--Inventario-->
                    <li class="nav-item dropdown" v-if="usuario.userGroup !== 'Encuestador'">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" class="nav-link dropdown-toggle">Inventario <i
                                class="bi bi-pie-chart"></i></a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                            <li v-if="(usuario.userGroup === 'Administrador' || usuario.userGroup === 'Bodeguista')">
                                <RouterLink :to="{ name: 'inventario' }" class="dropdown-item">Productos <i
                                        class="bi bi-box"></i> </RouterLink>
                            </li>
                            <li v-if="(usuario.userGroup === 'Administrador')">
                                <RouterLink :to="{ name: 'dineros' }" class="dropdown-item">Dineros <i
                                        class="bi bi-cash"></i></RouterLink>
                            </li>
                            <li v-if="(usuario.userGroup === 'Administrador')">
                                <RouterLink :to="{ name: 'jornadas' }" class="dropdown-item">Jornadas <i
                                        class="bi bi-journal-album"></i></RouterLink>
                            </li>
                        </ul>
                    </li>
                    <!---Gestión-->
                    <li class="nav-item dropdown"
                        v-if="(usuario.userGroup === 'Administrador' || usuario.userGroup === 'Encuestador')">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" class="nav-link dropdown-toggle">Censos <i class="bi bi-flag"></i></a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                            <li>
                                <RouterLink :to="{ name: 'censos' }" class="dropdown-item"> Crear familias <i
                                        class="bi bi-people"></i></RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- SEARCH FORM -->
                <form class="form-inline ml-0 ml-md-3">
                    <div class="input-group input-group-sm">
                        <input class="form-control form-control-navbar" type="search" placeholder="Search"
                            aria-label="Search" :value="props.dateTime" readonly>
                        <div class="input-group-append">
                            <button class="btn btn-navbar" type="submit">
                                <i class="bi bi-watch"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <!-- Right navbar links -->
            <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                <!-- Messages Dropdown Menu -->
                <li class="nav-item dropdown">

                    <div class="btn-group" v-if="sesion.isLogged">
                        <button type="button" class="btn btn-default">ROL: {{
                            group || (usuario.user.is_superuser ? 'SuperUsuario' : 'Invitado') }}
                            - {{
                                usuario.user.username }}
                        </button>
                        <button type="button" class="btn btn-default dropdown-toggle dropdown-icon"
                            data-toggle="dropdown">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu" role="menu">

                            <RouterLink class="dropdown-item" :to="{ name: 'profile' }">Perfil <i
                                    class="bi bi-user"></i></RouterLink>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" @click="salir">Salir <i class="bi bi-door-closed"></i></a>
                        </div>
                        <SesionProgressBar />
                    </div>

                    <div class="btn-group" role="group" aria-label="Basic example" v-else>
                        <RouterLink :to="{ name: 'login' }" type="button" class="btn btn-secondary">Entrar <i
                                class="bi bi-door-open"></i></RouterLink>
                        <RouterLink :to="{ name: 'register' }" type="button" class="btn btn-primary">Registrarse <i
                                class="bi bi-person-plus"></i></RouterLink>
                    </div>
                </li>
                <!-- Notifications Dropdown Menu -->


            </ul>
        </div>
    </nav>
    <!-- /.navbar -->
</template>

<script setup lang="ts">
const props = defineProps<{
    dateTime: string
}>()
import { RouterLink } from 'vue-router';
import SesionStore from "@/stores/SesionStore";
import SesionProgressBar from "@/components/SesionProgressBar.vue";
import UserStore from '@/stores/UserStore';
import { ref, watchEffect } from 'vue';
const sesion = SesionStore()
const usuario = UserStore()
const group = ref<any>()
watchEffect(() => {
    if (sesion.isLogged) { group.value = usuario.user.groups[0] }
})
const salir = () => {
    sesion.logout()
}
</script>
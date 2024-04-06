<template>
    <!-- Navbar -->
    <nav class="main-header ml-0 mb-2 navbar navbar-expand-md navbar-light navbar-white">
        <div class="container">
            <RouterLink :to="{ name: 'home' }" class="navbar-brand">
                <span class="brand-text font-weight-light">AyudApp <i class="bi bi-postcard-heart"></i></span>
            </RouterLink>

            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="index3.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" class="nav-link dropdown-toggle">Dropdown</a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                            <li><a href="#" class="dropdown-item">Some action </a></li>
                            <li><a href="#" class="dropdown-item">Some other action</a></li>

                            <li class="dropdown-divider"></li>

                            <!-- Level two dropdown-->
                            <li class="dropdown-submenu dropdown-hover">
                                <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"
                                    class="dropdown-item dropdown-toggle">Hover for action</a>
                                <ul aria-labelledby="dropdownSubMenu2" class="dropdown-menu border-0 shadow">
                                    <li>
                                        <a tabindex="-1" href="#" class="dropdown-item">level 2</a>
                                    </li>

                                    <!-- Level three dropdown-->
                                    <li class="dropdown-submenu">
                                        <a id="dropdownSubMenu3" href="#" role="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"
                                            class="dropdown-item dropdown-toggle">level 2</a>
                                        <ul aria-labelledby="dropdownSubMenu3" class="dropdown-menu border-0 shadow">
                                            <li><a href="#" class="dropdown-item">3rd level</a></li>
                                            <li><a href="#" class="dropdown-item">3rd level</a></li>
                                        </ul>
                                    </li>
                                    <!-- End Level three -->

                                    <li><a href="#" class="dropdown-item">level 2</a></li>
                                    <li><a href="#" class="dropdown-item">level 2</a></li>
                                </ul>
                            </li>
                            <!-- End Level two -->
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
                        <button type="button" class="btn btn-default">Sesión iniciada como: {{
                            usuario.user.groups?.includes('Administrador' || 'Encuestador' || 'Bodeguista') ?
                                usuario.user.groups[0] : (usuario.user.is_superuser ? 'SuperUsuario' : 'Invitado') }}
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
                            <a class="dropdown-item" href="#">Something else here</a>
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
const sesion = SesionStore()
const usuario = UserStore()

const salir = () => {
    sesion.logout()
}
</script>
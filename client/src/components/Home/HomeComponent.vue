<template>
    <div class="col col-lg-6" v-if="user.userGroup == 'Administrador' || user.userGroup == 'Encuestador'">
        <div class="small-box bg-info">
            <div class="inner">
                <h3>{{ cant_personas }}</h3>

                <p>Beneficiarios en sistema</p>
            </div>
            <div class="icon">
                <i class="bi bi-person-plus"></i>
            </div>
            <RouterLink :to="{ name: 'beneficiarios' }" class="small-box-footer">
                Más detalles <i class="fas fa-arrow-circle-right"></i>
            </RouterLink>
        </div>
    </div>

    <div class="col col-lg-6" v-if="user.userGroup == 'Administrador' || user.userGroup == 'Bodeguista'">
        <div class="small-box bg-warning">
            <div class="inner">
                <h3>{{ cant_insumos }}</h3>
                <p>Insumo(s) disponible(s)</p>
            </div>
            <div class="icon">
                <i class="bi bi-box"></i>
            </div>
            <RouterLink :to="{ name: 'inventario' }" class="small-box-footer">
                Más detalles <i class="fas fa-arrow-circle-right"></i>
            </RouterLink>
        </div>
    </div>

    <div class="col col-lg-6" v-if="user.userGroup == 'Administrador'">
        <div class="small-box bg-danger">
            <div class="inner">
                <h3>$0</h3>
                <p>Dinero disponible</p>
            </div>
            <div class="icon">
                <i class="bi bi-currency-dollar"></i>
            </div>
            <a href="#" class="small-box-footer">
                Próximamente <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
import BeneficiarioStore from '@/stores/BeneficiariosStore';
import InventarioStore from '@/stores/InventarioStore';
import SesionStore from '@/stores/SesionStore';
import UserStore from '@/stores/UserStore';
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';
const store = SesionStore()
const personas = BeneficiarioStore()
const insumos = InventarioStore()
const cant_insumos = ref(0)
const cant_personas = ref(0)
const user = UserStore()

onMounted(async () => {
    if (store.isLogged && !cant_insumos.value && !cant_personas.value) {
        personas.obtenerBeneficiarios()
        cant_personas.value = (await personas.beneficiarios.length)
        cant_insumos.value = (await insumos.obtenerProductos()).length
        console.log(user.userGroup)
    }
})
</script>
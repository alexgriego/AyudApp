<template>
    <form @submit.prevent="handleSubmit">
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="nombre">Nombre del evento <i class="bi bi-123"></i></label>
                    <input type="text" class="form-control form-control-border" id="nombre" name="nombre"
                        @input="handleInput" v-model="data.nombre" :required="!data.nombre">
                </div>
            </div>
            <div class="col">
                <div class="col">
                    <div class="form-group">
                        <label for="fecha_inicio">Fecha de incio <i class="bi bi-calendar"></i></label>
                        <input type="date" class="form-control form-control-border" id="fecha_inicio"
                            name="fecha_inicio" @input="handleInput" v-model="data.fecha_inicio"
                            :required="!data.fecha_inicio">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <textarea name="descripcion" v-model="data.descripcion" id="descripcion" cols="60" rows="10"
                    placeholder="descripcion del evento" @input="handleInput"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col col-sm-5">
                <div class="form-group">
                    <label for="habilitar_insumos">¿Se emplearán insumos? <i class="bi bi-check"></i></label>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="habilitar_insumos"
                            v-model="habilitar_insumos">
                        <label class="custom-control-label" for="habilitar_insumos"></label>
                    </div>
                </div>
            </div>
            <div class="col col-auto" v-if="habilitar_insumos">
                <div class="form-group">
                    <label for="identificacion">Tipo de insumo <i class="bi bi-person-vcard"></i></label>
                    <div class="input-group input-group mb-3">
                        <div class="input-group-prepend" id="identificacion">
                            <select class="custom-select" v-model="tipo_insumo">
                                <option title="Cédulda de ciudadanía">No registra</option>
                                <option title="Cédula de extrangería">Dinero</option>
                                <option title="Tarjeta de identidad">Insumos</option>
                            </select>
                        </div>
                        <!-- /btn-group -->
                        <input type="text" class="form-control" v-model="search"
                            :placeholder="tipo_insumo === 'Dinero' ? 'Indique patrocinador' : (tipo_insumo === 'Insumos' ? 'Indique codigo' : 'Indique una opción')"
                            :disabled="tipo_insumo === 'No registra'">
                    </div>
                </div>
                <ul class="list-group" v-if="searchResult.length > 0" v-for="item in searchResult">
                    <li class="list-group-item" @click="() => { selectedItem.value = item }">
                        {{ tipo_insumo === 'Insumos' ? (item.codigo + ' - ' + item.nombre) : (item.patrocinador + ' - '
                            + item.cantidad) }} <i class="bi bi-check"
                            v-if="tipo_insumo !== 'No registra' && selectedItem.value === item"></i>
                    </li>
                </ul>
                <div class="form-group" v-if="habilitar_insumos">
                    <label for="cantidad">Cantidad <i class="bi bi-clipboard"></i></label>
                    <input type="number" class="form-control form-control-border" id="cantidad" name="cantidad"
                        v-model="cantidad" :required="!cantidad && habilitar_insumos" />

                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Procesar <i class="bi bi-save"></i></button>
    </form>
</template>
<script setup lang="ts">
import InventarioStore from '@/stores/InventarioStore';
import type { EventoTypes } from '@/types/InventarioTypes';
import { ref, watchEffect } from 'vue'
import { warningMessage } from '../messages';
const data = ref({} as EventoTypes)
const store = InventarioStore()
const tipo_insumo = ref('No registra')
const habilitar_insumos = ref(false)
const search = ref<string>('')
const searchResult = ref([] as any[])
const selectedItem = ref({} as any)
const cantidad = ref(0)


watchEffect(async () => {
    if (tipo_insumo.value === 'Dinero' && search.value.length > 0) {
        searchResult.value = await store.obtenerDinero(search.value)
        data.value = { ...data.value, fondos: selectedItem.value.id, producto: null, cantidad_producto: 0 }
    } else if (tipo_insumo.value === 'Insumos' && search.value.length > 0) {
        searchResult.value = await store.obtenerProducto(search.value)
        data.value = { ...data.value, producto: selectedItem.value.codigo, fondos: null, cantidad_fondos: 0 }
    }

    if (tipo_insumo.value === 'No registra') {
        searchResult.value = []
    }
})

const handleInput = (e: any) => {
    data.value = { ...data.value, [e.target.name]: e.target.value }
}


const handleSubmit = async (e: any) => {

    let aux = selectedItem.value.value
    if (tipo_insumo.value === 'Dinero') {
        data.value = { ...data.value, fondos: aux.id, cantidad_fondos: cantidad.value }
    } else if (tipo_insumo.value === 'Insumos') {
        data.value = { ...data.value, producto: aux.codigo, cantidad_producto: cantidad.value }
    }
    console.log(data.value)
    await warningMessage('¿Está seguro de procesar el evento?', 'Este proceso no se puede alterar', () => {
        store.guardarJornada(data.value)
    })
}
</script>
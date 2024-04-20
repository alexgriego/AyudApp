<template>
    <form @submit.prevent="handleSubmit">
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="NIT">NIT <i class="bi bi-123"></i></label>
                    <input type="text" class="form-control form-control-border" id="NIT" name="NIT" @input="handleInput"
                        v-model="data.NIT" :required="!data.NIT">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="nombre">Razón social <i class="bi bi-card-text"></i></label>
                    <input type="text" class="form-control form-control-border" id="nombre" name="nombre"
                        @input="handleInput" v-model="data.nombre" :required="!data.nombre">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="direccion">Direccion <i class="bi bi-geo"></i></label>
                    <input type="text" class="form-control form-control-border" id="direccion" name="direccion"
                        @input="handleInput" v-model="data.direccion" :required="!data.NIT">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="ciudad">Ciudad <i class="bi bi-map"></i></label>
                    <input type="text" class="form-control form-control-border" id="ciudad" name="ciudad"
                        @input="handleInput" v-model="data.ciudad" :required="!data.ciudad">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="telefono">Teléfono <i class="bi bi-phone"></i></label>
                    <input type="text" class="form-control form-control-border" id="telefono" name="telefono"
                        @input="handleInput" v-model="data.telefono" :required="!data.telefono">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="correo">Correo electrónico <i class="bi bi-envelope-at"></i></label>
                    <input type="text" class="form-control form-control-border" id="correo" name="correo"
                        @input="handleInput" v-model="data.correo" :required="!data.correo">
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-success">Procesar <i class="bi bi-save"></i></button>
    </form>
</template>
<script setup lang="ts">
import type { PatrocinadorTypes } from '@/types/PatrocinadorTypes';
import { onMounted, ref } from 'vue';
import PatrocinadorStore from '@/stores/PatrocinadorStore';
import { useRouter } from 'vue-router';
const url = useRouter()
let NIT = url.currentRoute.value.params.NIT
const store = PatrocinadorStore()
const props = defineProps<{
    data: PatrocinadorTypes | null
}>()

const data = ref({} as PatrocinadorTypes)

onMounted(() => {
    props.data && (data.value = props.data)
})

const handleInput = (e: any) => {
    const target = e.target as HTMLInputElement
    data.value = { ...data.value, [target.name]: target.value }
}

const handleSubmit = async () => {
    NIT ? await store.actualizarPatrocinador(Number(NIT), data.value) : await store.crearPatrocinador(data.value)
}

</script>
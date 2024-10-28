<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="codigo">Código <i class="bi bi-123"></i></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="codigo"
            name="codigo"
            @input="handleInput"
            v-model="data.codigo"
            :required="!codigo"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="nombre">Nombre <i class="bi bi-person-badge"></i></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="nombre"
            name="nombre"
            @input="handleInput"
            v-model="data.nombre"
            :required="!codigo"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <div class="form-group">
            <label for="estado_civil"
              >Patrocinador <i class="bi bi-person"></i
            ></label>
            <select class="custom-select" @change="handleInput" v-model="data.patrocinador" name="patrocinador">
              <option v-for="item in _patrocinadores" :key="item.NIT" :value="item.NIT">
                {{ item.nombre }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="tipo">Tipo <i class="bi bi-braces-asterisk"></i></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="tipo"
            name="tipo"
            @input="handleInput"
            v-model="data.tipo"
            :required="!codigo"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="cantidad">Cantidad <i class="bi bi-box"></i></label>
          <input
            type="number"
            class="form-control form-control-border"
            id="cantidad"
            name="cantidad"
            @input="handleInput"
            v-model="data.cantidad"
            :required="!codigo"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="es_perecedero"
            >¿Es Perecedero? <i class="bi bi-person"></i
          ></label>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="es_perecedero"
              v-model="data.es_perecedero"
            />
            <label class="custom-control-label" for="es_perecedero"></label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="form-group" v-if="data.es_perecedero">
        <label for="fecha_vencimiento"
          >Fecha de vencimiento <i class="bi bi-person"></i
        ></label>
        <input
          type="date"
          class="form-control form-control-border"
          id="fecha_vencimiento"
          name="fecha_vencimiento"
          @input="handleInput"
          v-model="data.fecha_vencimiento"
          :required="!codigo"
        />
      </div>
    </div>
    <div class="row">
      <textarea
        name="descripcion"
        v-model="data.descripcion"
        id="descripcion"
        cols="100"
        rows="10"
      ></textarea>
    </div>
    <div class="row">
      <button type="submit" class="btn btn-primary">
        Guardar <i class="bi bi-save"></i>
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
import InventarioStore from "@/stores/InventarioStore";
import PatrocinadorStore from "@/stores/PatrocinadorStore";
import type { ProductoTypes } from "@/types/InventarioTypes";
import type { PatrocinadorTypes } from "@/types/PatrocinadorTypes";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const data = ref({} as ProductoTypes);
const _patrocinadores = ref([] as PatrocinadorTypes[])
const url = useRouter();
const store = InventarioStore();
const patrocinadorStore = PatrocinadorStore();

const props = defineProps<{
  data?: ProductoTypes | null;
}>();

onMounted(async() => {
  if (props.data) {
    data.value = props.data;
  }
 await  patrocinadorStore.obtenerPatrociandores().then((response)=>{
   _patrocinadores.value=response
 })
});

let codigo = url.currentRoute.value.params.codigo;

const handleInput = (e: any) => {
  if(e.target.name==='patrocinador'){
    let p = _patrocinadores.value.find((p)=>p.NIT==e.target.value)?.nombre
    data.value.patrocinador = p ||''
  }
  data.value = {
    ...data.value,
    [e.target.name]: e.target.value,
  };

};

const handleSubmit = async (e: any) => {
  e.preventDefault();
  codigo
    ? await store.actualizarProducto(codigo, data.value)
    : await store.crearProducto(data.value);
};
</script>

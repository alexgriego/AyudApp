<template>
  <form @submit.prevent="handleSubmit">
    <!--Identificacion-->
    <div class="form-group">
      <label for="identificacion"
        >Identificacón <i class="bi bi-person-vcard"></i
      ></label>
      <div class="input-group input-group mb-3">
        <div
          class="input-group-prepend"
          id="identificacion"
          :required="!identificacion"
        >
          <select class="custom-select" v-model="data.tipo_id">
            <option title="Cédulda de ciudadanía">CC</option>
            <option title="Cédula de extrangería">CE</option>
            <option title="Tarjeta de identidad">TI</option>
            <option title="Registro civil">RC</option>
            <option title="Pasaporte">PA</option>
            <option title="Permiso especial de permanencia">PEP</option>
          </select>
        </div>
        <!-- /btn-group -->
        <input
          type="text"
          class="form-control"
          v-model="data.identificacion"
          :required="!identificacion"
        />
      </div>
    </div>
    <!--Nombre, apellido y fecha de nacimiento-->
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="nombre">Nombre <i class="bi bi-person-badge"></i></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="nombre"
            name="nombre"
            @input="handleChange"
            v-model="data.nombre"
            :required="!identificacion"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="apellido"
            >Apellido <i class="bi bi-person-badge"></i
          ></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="apellido"
            name="apellido"
            @input="handleChange"
            v-model="data.apellido"
            :required="!identificacion"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="fecha_nacimiento"
            >Fecha de nacimiento <i class="bi bi-person"></i
          ></label>
          <input
            type="date"
            class="form-control form-control-border"
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            @input="handleChange"
            v-model="data.fecha_nacimiento"
            :required="!identificacion"
          />
        </div>
      </div>
    </div>
    <!--Correo, telefono y dirección-->
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for=" correo">Correo <i class="bi bi-envelope"></i></label>
          <input
            type="email"
            class="form-control form-control-border"
            id="correo"
            name="correo"
            @input="handleChange"
            v-model="data.correo"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="telefono">Telefono <i class="bi bi-telephone"></i></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="telefono"
            name="telefono"
            @input="handleChange"
            v-model="data.telefono"
            :required="!identificacion"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="direccion">Dirección <i class="bi bi-house"></i></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="direccion"
            name="direccion"
            @input="handleChange"
            v-model="data.direccion"
            :required="!identificacion"
          />
        </div>
      </div>
    </div>
    <!-- ciudad, departamento, pais-->
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="ciudad">Ciudad <i class="bi bi-geo-alt"></i></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="ciudad"
            name="ciudad"
            @input="handleChange"
            v-model="data.ciudad"
            :required="!identificacion"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="departamento"
            >Departamento/Estado <i class="bi bi-geo-alt"></i
          ></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="departamento"
            name="departamento"
            @input="handleChange"
            v-model="data.departamento"
            :required="!identificacion"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="pais">Pais <i class="bi bi-geo-alt"></i></label>
          <input
            type="text"
            class="form-control form-control-border"
            id="pais"
            name="pais"
            @input="handleChange"
            v-model="data.pais"
            :required="!identificacion"
          />
        </div>
      </div>
    </div>
    <!--Edad, genero, estado civil -->
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="edad">Edad (en años) <i class="bi bi-person"></i></label>
          <input
            type="number"
            class="form-control form-control-border"
            id="edad"
            name="edad"
            @input="handleChange"
            v-model="data.edad"
            disabled
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="genero">Genero <i class="bi bi-person"></i></label>
          <select class="custom-select" v-model="data.genero">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="estado_civil"
            >Estado civil <i class="bi bi-person"></i
          ></label>
          <select class="custom-select" v-model="data.estado_civil">
            <option value="Soltero(a)">Soltero(a)</option>
            <option value="Casado(a)">Casado(a)</option>
            <option value="Divorciado(a)">Divorciado(a)</option>
            <option value="Viudo(a)">Viudo(a)</option>
          </select>
        </div>
      </div>
    </div>
    <!--- ¿es discapacitado?, ¿es victima?, ¿es desplazado?-->
    <!-- <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="discapacitado">¿Es discapacitado? <i class="bi bi-person"></i></label>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="discapacitado"
                            v-model="data.es_discapacitado">
                        <label class="custom-control-label" for="discapacitado"></label>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="victima">¿Es víctima? <i class="bi bi-person"></i></label>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="victima" v-model="data.es_victima">
                        <label class="custom-control-label" for="victima"></label>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="desplazado">¿Es desplazado? <i class="bi bi-person"></i></label>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="desplazado"
                            v-model="data.es_desplazado">
                        <label class="custom-control-label" for="desplazado"></label>
                    </div>
                </div>
            </div>
        </div>
        <!--Texto con observaciones-->
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="con_especial"
            >Codición especial<i class="bi bi-person"></i
          ></label>
          <select class="custom-select" @change="handleChange">
            <option value="es_desplazado">Desplazado(a)</option>
            <option value="es_victima">Víctima</option>
            <option value="es_discapacitado">Discapacitado(a)</option>
          </select>
        </div>

      </div>
      <div class="col">
        <div class="form-group">
          <label for="observaciones"
            >Observaciones <i class="bi bi-person"></i
          ></label>
          <textarea
            class="form-control form-control-border"
            id="observaciones"
            name="observaciones"
            @input="handleChange"
            v-model="data.observaciones"
          ></textarea>
        </div>
      </div>
    </div>
    <button
      type="submit"
      :class="props.data ? 'btn btn-warning' : 'btn btn-primary'"
    >
      Procesar <i class="bi bi-save"></i>
    </button>
  </form>
</template>
<script setup lang="ts">
import type { BeneficiarioTypes } from "@/types/BeneficiarioTypes";
import { onMounted, ref, watchEffect } from "vue";
import BeneficiarioStore from "@/stores/BeneficiariosStore";
import { useRouter } from "vue-router";

const url = useRouter();
const data = ref({} as BeneficiarioTypes);
const store = BeneficiarioStore();

const props = defineProps<{
    data: BeneficiarioTypes | null
}>()

let identificacion = Number(url.currentRoute.value.params.identificacion);

onMounted(() => {
  if (props.data) {
    data.value = props.data;
  } else {
    data.value.tipo_id = "CC";
    data.value.estado_civil = "Soltero(a)";
    data.value.genero = "Masculino";
    data.value.departamento = "La Guajira";
  }
});

watchEffect(() => {
  if (identificacion) {
    let fechaActual = new Date();
    let fechaNacimiento = new Date(data.value.fecha_nacimiento);
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let m = fechaActual.getMonth() - fechaNacimiento.getMonth();
    if (
      m < 0 ||
      (m === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    data.value.edad = edad;
  }
});

const handleChange = (e: any) => {
    if(e.target.value.includes("es_desplazado")) {
        data.value.es_desplazado = true;
        data.value.es_victima = false;
        data.value.es_discapacitado = false;
    }
    if(e.target.value.includes("es_victima")) {
        data.value.es_desplazado = false;
        data.value.es_victima = true;
        data.value.es_discapacitado = false;
    }
    if(e.target.value.includes("es_discapacitado")) {
        data.value.es_desplazado = false;
        data.value.es_victima = false;
        data.value.es_discapacitado = true;
    }
  data.value = {
    ...data.value,
    [e.target.name]: e.target.value,
  };
};

const handleSubmit = (e: any) => {
  e.preventDefault();
  identificacion
    ? store.actualizarBeneficiario(identificacion, data.value)
    : store.crearBeneficiario(data.value);
};
</script>

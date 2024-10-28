<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Lider de familia: {{ lider.nombre }} {{ lider.apellido }} 
                <div className="btn btn-group">
                    <button type="button" class="btn btn-default" @click="showModal = true">
    Añadir  beneficiario nuevo
  </button>
                    <button type="button"
                    class="btn btn-danger" @click="eliminarFamilia">Borrar nucleo</button>
                </div>
            </h4>
            <br>
            <div class="card-body">
                <h5>Personas a cargo</h5>
                <table class="table table-striped table-hover" v-if="beneficiarios.length">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Parentesco</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in beneficiarios">
                            <th scope="row">{{ item.tipo_iden }}: {{ item.identificacion }}</th>
                            <td>{{ item.nombre + " " + item.apellido }}</td>
                            <td>
                                {{ item.parentesco }}
                            </td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-danger"
                                        @click="eliminarPersona(item.identificacion)"><i
                                            class="bi bi-trash"></i></button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div class="alert alert-warning alert-dismissible fade show" role="alert" v-else>
                    <strong>404!</strong> No hay personas a cargo.
                </div>
            </div>
        </div>
    </div>
            <div class="modal fade" :class="{ 'show': showModal }" 
     :style="{ display: showModal ? 'block' : 'none' }">
  <div class="modal-dialog" style="max-width: 50%; width: 50%;">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Añadir beneficiario nuevo</h4>
        <button type="button" class="close" @click="showModal = false">
          <span>×</span>
        </button>
      </div>
      <div class="modal-body">
        <ActualizarRelacionados/>
      </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { viewFamilia, DatosFamilia, buscarBeneficiario, removeFromFamilia, deleteFamilia } from '@/apis/familias.apis';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { successMessage, warningMessage } from '../messages';
import CensoStore from '@/stores/CensoStore';
import  ReclacionadosFragment from './fragments/RelacionadosFragment.vue';
import ActualizarRelacionados from './fragments/ActualizarRelacionados.vue';

const url = useRouter()
const info = ref([] as any[])
const beneficiarios = ref([] as any[])
const lider = ref({} as any)
const showModal = ref(false)
const censo = CensoStore()

const getLiderData = async () => {
    const { data } = await DatosFamilia(Number(url.currentRoute.value.params.id))
    lider.value = data
    console.log(lider.value.lider)
    censo.setearLider(lider.value.lider)
}

const getData = async () => {
    const { data } = await viewFamilia(Number(url.currentRoute.value.params.id))
    info.value = data
    for (let item = 0; item < info.value.length; item++) {
        const { data } = await buscarBeneficiario(info.value[item])
        beneficiarios.value.push(data)
    }
    getLiderData()
}

onMounted(async () => {
    getData()
})

const eliminarPersona = async (id: number) => {
    await warningMessage('¿Está seguro de eliminar esta persona del núcleo?', 'Este proceso no se puede deshacer', () => {
        removeFromFamilia(id)
    })
        .then((Response) => {
            successMessage('Hecho', 'Persona eliminada')
            if (beneficiarios.value.length > 1) {
                let aux = beneficiarios.value.filter((item: any) => item.identificacion !== id)
                beneficiarios.value = aux
            }
            else {
                beneficiarios.value = []
            }
        })

}

const eliminarFamilia = async () => {
    await warningMessage('¿Está seguro de eliminar este núcleo familiar?', 'Este proceso no se puede deshacer', () => {
        deleteFamilia(Number(url.currentRoute.value.params.id))
    })
        .then((Response) => {
            successMessage('Hecho', 'Núcleo familiar eliminado')
            url.push('/censos')
        })
}
</script>
<template>

    <div class="card card-default">
        <div class="card-header" :style="{
            display: 'flex',
        }">
            <h5>{{ props.header }}</h5>
            <div class="card-tools" :style="{
                justifyContent: 'end',
                alignItems: 'end',
                display: 'flex',
                flex: '1',
            }" v-for="item in props?.buttons" v-if="props?.buttons">
                <RouterLink :to="item.link" :class="item.class" v-if="item.type !== 'button'">
                    <i :class="item.icon"> </i>
                    {{ item.text }}
                </RouterLink>
                <button :class="item.class" v-else>
                    <i :class="item.icon"></i>
                    {{ item.text }}
                </button>
            </div>
        </div>
        <div class="card-body">
            <div class="row justify-content-center align-items-center">

                <Animations :ICON="props.icon" />

                <div class="col">
                    <h5>{{ props.title }}</h5>
                </div>
            </div>
            <p class="card-text mt-5">
                <!--Aquí se importa así-->
                <component :is="props?.component" v-if="props?.component" />
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import Animations from './Animations.vue';

const props = defineProps<{
    header: string;
    title: string;

    /*animation: object ;*/
    buttons: Array<{
        text: string;
        link: string;
        icon: string;
        class: string;
        type: string;
    }> | null;
    icon: object;
    component: Object | null; //Componente aquí
}>();
</script>
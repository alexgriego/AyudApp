<template>
    <div class="col col-lg-6">
        <div class="card card-default">
            <div class="card-header">
                <h5>{{ props.header }}</h5>
                <div class="card-tools" v-for="item in props?.buttons" v-if="props?.buttons">
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
                <h5 class="card-title">{{ props.title }}</h5>
                <p class="card-text mt-5">
                    <!--Aquí se importa así-->
                    <component :is="props.component" />
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
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

    component: Object; //Componente aquí
}>();
</script>
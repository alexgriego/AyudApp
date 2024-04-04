<script setup lang="ts">
import { onMounted, ref } from "vue"
import { LottieAnimation } from "lottie-web-vue"
const props = defineProps<{
    ICON: object;
}>();

let anim = ref()

onMounted(() => {
    setTimeout(() => {
        anim.value
    }, 500)
})
</script>
<template>
    <div :style="{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }" class="col col-lg-4">
        <LottieAnimation :animation-data="props.ICON" :style="{
        width: '100px',
        height: '100px'
    }" :auto-play="true" :loop="true" :speed="1" ref="anim" />
    </div>
</template>
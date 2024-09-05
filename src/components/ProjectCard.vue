<script setup>
import { ref } from 'vue';
import HoverVideo from './HoverVideo.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: false,
    },
    src: {
        type: String,
        required: true,
    },
    isVid: {
        type: Boolean, 
        default: false,
    },
    auto: {
        type: Boolean,
        default: false,
    },
    link: {
        type: String,
        default: '',
    },
    isOut: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="project-card hover:brightness-75">
        <Transition name="fade-in-project" class="delay-1000" appear>
            <!-- img or vid -->
            <a :href="link" :target="(isOut ?  '_blank' : '')">
                <HoverVideo v-if="isVid" :video-src="src" :auto="auto" class="mb-3 rounded"></HoverVideo> 
                <img v-else :src="src" class="mb-3 rounded" />
            </a>
        </Transition>

        <a :href="link" :target="(isOut ?  '_blank' : '')">
            <div class="font-medium leading-3">
                {{ title }}                
            </div>
        </a>

        <div class="text-gray opacity-50">
            {{ caption }}
        </div>
    </div>
</template>

<style scoped>
</style>
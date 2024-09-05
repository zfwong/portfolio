<script setup>
import { ref } from 'vue';

const props = defineProps({
    videoSrc: {
        type: String,
        required: true,
    },
    auto: {
        type: Boolean,
        default: false,
    },
});

const video = ref(null);

const playVideo = () => {
    if (!props.auto && video.value) {
        video.value.play();
    }
}

const pauseVideo = () => {
    if (!props.auto && video.value) {
        video.value.pause();
    }
}
</script>

<template>
    <div class="flex justify-center items-center z-0" @mouseenter="playVideo"  @mouseleave="pauseVideo">
        <video 
            ref="video"
            class="w-full h-auto rounded" 
            muted 
            loop 
            :autoplay="auto"
            :src="videoSrc"
        ></video>
    </div>
</template>
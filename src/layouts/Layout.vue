<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router';

const currentPath = ref(window.location.pathname)

const scrollToSection = (sectionId) => {
    if (sectionId == 'top') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    } else {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

// onMounted(() => {
//     router.on('navigate', (event) => {
//         const newPath = event.detail.page.url.split('?')[0]

//         if (newPath === currentPath.value) {
//             scrollToTop()
//         }

//         currentPath.value = newPath
//     })
// })
</script>

<template>
    <div>
        <div class="w-full flex flex-col items-center relative z-10 backdrop-blur selection:text-teal-200">
            <div class="w-full h-full flex justify-center bg-stripeBg">
                <div class="flex flex-col relative w-full max-w-8xl px-3">
                    <nav class="sticky top-0 flex justify-between items-center py-3 backdrop-blur z-10">
                        <!-- <Link :href="route('index')"
                            class="text-3xl hover:opacity-60 transition duration-300 cursor-pointer">
                            zf.
                        </Link> -->
                        <RouterLink to="/" 
                            class="text-3xl hover:opacity-60 transition duration-300 cursor-pointer">
                            zf.
                        </RouterLink>

                        <ul class="flex">
                            <!-- dark mode btn -->
                            <!-- <li class="px-3">
                                <span>
                                    <button @click="toggleDark()" class="px-4 py-2 text-white bg-gray-600 dark:bg-purple-700">
                                        Dark Mode
                                    </button>
                                </span>
                            </li> -->
                            <li class="px-3">
                                <span>
                                    <!-- <Link :href="route('index')"
                                        class="text-xl hover:opacity-60 transition duration-300">
                                        about
                                    </Link> -->
                                    <RouterLink to="/" 
                                        class="text-xl hover:opacity-60 transition duration-300"
                                    >
                                        about
                                    </RouterLink>
                                </span>
                            </li>
                            <li class="px-3">
                                <span>
                                    <!-- <Link :href="route('resume')"
                                        class="text-xl hover:opacity-60 transition duration-300">
                                        resume
                                    </Link> -->
                                    <RouterLink to="/resume" 
                                        class="text-xl hover:opacity-60 transition duration-300"
                                    >
                                        resume
                                    </RouterLink>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <!-- Page Content -->
                    <main class="py-3">
                        <slot />
                    </main>
                </div>
            </div>
        </div>
        <footer
            class="sticky bottom-0 left-0 w-full flex flex-col md:items-center justify-start h-36 opacity-90 md:justify-center z-1 bg-footer selection:text-sky-400 p-3 md:flex-row">
            <div class="flex flex-col md:flex-row max-w-8xl w-full">
                <div class="mb-3 md:w-1/2 md:mb-0">
                    <p class="md:text-sm text-[#ccd0d2] font-bold uppercase elmono">Last updated 2024-09-01</p>
                </div>
                <div class="md:w-1/2">
                    <ul class="flex flex-col md:flex-row">
                        <li class="md:px-3">
                            <span>
                                <!-- <Link :href="route('about')"
                                    class="elmono hover:opacity-60 transition duration-300 uppercase text-white">
                                    about
                                </Link> -->
                                <RouterLink to="/"
                                    class="elmono hover:opacity-60 transition duration-300 uppercase text-white"
                                >
                                    about
                                </RouterLink>
                            </span>
                        </li>
                        <li class="md:px-3">
                            <span>
                                <!-- <Link :href="route('resume')"
                                    class="elmono hover:opacity-60 transition duration-300 uppercase text-white">
                                    resume
                                </Link> -->
                                <RouterLink to="/resume"
                                    class="elmono hover:opacity-60 transition duration-300 uppercase text-white">
                                    resume
                                </RouterLink>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>
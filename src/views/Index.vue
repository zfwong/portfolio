<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import HoverVideo from '@/components/HoverVideo.vue';
</script>

<template>
    <div class="h-full min-h-screen md:my-8">
        <Transition name="fade-in" appear>
            <div class="grid grid-cols-12">
                <div class="col-start-1 col-end-13 md:col-end-7 mb-4">
                    <!-- About Me -->
                    <div class="flex flex-col gap-3">
                        <div class="text-gray opacity-50">
                            About Me
                        </div>
                        <div class="">
                            <p class="mb-4">
                                Hello, I'm a web developer that love to experiment and create awesome website.
                                Living in Kuala Lumpur.
                                With a passion for crafting seamless and responsive websites. 
                                I'm always excited to take on new challenges and collaborate with others who are passionate about building the future of the web.
                            </p>
                        </div>
                        <div class="md:w-2/3">
                            <Transition name="fade-in-right" appear>
                                <!-- <img src="/images/kl.jpg" alt="images" class="object-cover rounded"> -->
                                <HoverVideo video-src="/videos/kl_timelapse.mp4" class="card-outline rounded hover:scale-[1.05] duration-300"></HoverVideo> 
                            </Transition>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-6 col-start-1 col-end-13 md:col-start-8 font-bold gap-3">
                    <div class="col-start-1 col-end-4 opacity-50 text-gray font-normal t-s-1">
                        <Transition name="fade-in" appear>
                            Experience
                        </Transition>
                    </div>
                    <div class="col-start-4 col-end-7 opacity-50 text-gray font-normal t-s-1">
                        Description
                    </div>
                    <div class="col-start-1 col-end-4 t-s-2">
                        Efiankey Solution <br>
                        <div class="font-normal font-gray opacity-50">
                            Frontend Dev <br>
                            (2022 - 2023)
                        </div>
                    </div>
                    <div class="col-start-4 col-end-7 font-normal t-s-2">
                        Involved in create 
                        <a href="https://www.ttwoweb.com/" target="_blank" class="underline hover:no-underline">
                            company website
                        </a>, build 
                        <a href="https://www.kevo.my/homepage.php" target="_blank" class="underline hover:no-underline">
                            Kevo website (Online Insurance Biz Web) 
                        </a>
                        from scratch.
                    </div>
                    <div class="col-start-1 col-end-4 t-s-3">
                        KBB Business Solution <br>
                        <div class="font-normal font-gray opacity-50">
                            Junior Web Dev/Analyst Programmer <br>
                            (2018 - 2020)
                        </div>
                    </div>
                    <div class="col-start-4 col-end-7 font-normal t-s-3">
                        Upgrade company CRM website, build web app on industrial phone with barcode scanner, involved in 
                        <a href="https://www.kbb.net.my/Portfolio/Details/89" target="_blank" class="underline hover:no-underline">
                            kindergarten MIS system
                        </a>
                        , and a online medical consulation web app.
                    </div>
                    <div class="col-start-1 col-end-4 t-s-4">
                        ComputerXpress <br>
                        <div class="font-normal font-gray opacity-50">
                            IT Technician assistant, Trainee <br>
                            (2017)
                        </div>
                    </div>
                    <div class="col-start-4 col-end-7 font-normal t-s-4">
                        IT Support.
                    </div>
                </div>
            </div>
        </Transition>
        <div class="border-b border-white/10 my-6"></div>
        <Transition name="fade-in" appear>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div class="md:col-start-1 md:col-end-4 lg:col-end-4 text-gray opacity-50">
                    Work/Project
                </div>
                <div class="flex flex-col gap-6">
                    <ProjectCard 
                        title="TtwoWeb Website" 
                        caption="Front End Dev"
                        src="/videos/ttwoweb.mp4" 
                        :isVid="true"
                        :auto="true"
                        :isOut="true"
                        link="https://www.ttwoweb.com/"
                    ></ProjectCard>
                </div>
                <div class="flex flex-col gap-6">
                    <ProjectCard 
                        title="Kevo.my Website" 
                        caption="Front End Dev" 
                        src="/images/kevo.png" 
                        :isVid="false"
                        :isOut="true"
                        link="https://www.kevo.my/homepage.php"
                    ></ProjectCard>
                </div>
                <div class="flex flex-col gap-6">

                </div>
            </div>
        </Transition>
    </div>
</template>

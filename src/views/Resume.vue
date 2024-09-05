<script setup>
</script>

<template>
    <Transition name="fade-in" appear>
        <div class="flex flex-col min-h-screen mb-7 md:text-[16px] md:my-8 md:mb-0">
            <div class="flex grid gap-2 md:gap-x-3 md:gap-y-8 grid-cols-12">

                <!-- info -->
                <div class="flex flex-col col-start-1 col-end-13 md:col-end-5 t-s-1">
                    <h1 class="font-bold">
                        WONG ZHEN FENG
                    </h1>
                </div>
                <div class="flex grid grid-cols-6 col-start-1 col-end-13 md:col-start-5 t-s-1 mb-4">
                    <div class="flex flex-col font-bold col-start-1 col-end-7 font-bold opacity-75 md:flex-row">
                        <div class="md:border-r-2 md:pr-3">
                            <a href="https://maps.app.goo.gl/QKF6dGJgz62iqcbD7" target="_blank">
                                Kuala Lumpur
                            </a>
                        </div>
                        <div class="md:border-r-2 md:px-3">
                            <a href="tel:+60162502049">
                                016&#8211;250 2049
                            </a>
                        </div>
                        <div class="md:px-3">
                            <a href="mailto:zhenfeng1997@hotmail.com">
                                zhenfeng1997@hotmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <!-- education -->
                <div class="flex flex-col col-start-1 col-end-13 md:col-end-5 t-s-2">
                    <div class="text-gray font-bold opacity-50">
                        Education
                    </div>
                </div>
                <div class="flex grid md:gap-x-2 md:gap-y-6 grid-cols-6 col-start-1 col-end-13 md:col-start-5 t-s-2 mb-4">
                    <div class="col-start-1 col-end-7 text-gray font-bold opacity-75">
                        Jan 2015 &#8211; May 2017
                    </div>
                    <div class="col-start-1 col-end-7">
                        <div class="flex flex-col">
                            <div class="font-bold">
                                Diploma in Information Technology (cgpa: 3.77)
                            </div>
                            <div>
                                <a href="https://cosmopointcollege.edu.my/en/kampus-kami-ipoh/" target="_blank">
                                    COSMOPOINT COLLEGE IPOH
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- experience -->
                <div class="flex flex-col col-start-1 col-end-13 md:col-end-5 t-s-3">
                    <div class="text-gray font-bold opacity-50">
                        Experience
                    </div>
                </div>
                <div class="flex grid md:gap-x-2 md:gap-y-6 grid-cols-6 col-start-1 col-end-13 md:col-start-5 t-s-3 mb-4">
                    <div class="col-start-1 col-end-7 text-gray font-bold opacity-75">
                        Oct 2022 &#8211; Dec 2023
                    </div>
                    <div class="col-start-1 col-end-7 md:col-end-5">
                        <div class="flex flex-col">
                            <div class="font-bold">
                                Front End Web Developer
                            </div>
                            <div class="mb-4">
                                Efiankey Solution Sdn. Bhd.
                            </div>
                            <p class="mb-4">
                                Develop and implement highly responsive user interface components using modern web technologies. Ensure the technical feasibility of UI/UX designs. Collaborate with designers and backend developers to create seamless and visually appealing web applications.
                            </p>
                        </div>
                    </div>

                    <div class="col-start-1 col-end-7 text-gray font-bold opacity-75">
                        Apr 2018 &#8211; Mar 2020
                    </div>
                    <div class="col-start-1 col-end-7 md:col-end-5">
                        <div class="flex flex-col">
                            <div class="font-bold">
                                Junior Web Developer/Analyst Programmer
                            </div>
                            <div class="mb-4">
                                KBB Business Solution
                            </div>
                            <p class="mb-4">
                                Work with stakeholders to gather and understand business needs. Design software systems, including database structures, user interfaces, and application logic. Write, test, and debug code based on the design specifications. Conduct unit and integration testing to ensure the software works as expected. Provide ongoing support for the software, including troubleshooting issues and making enhancements.
                            </p>
                        </div>
                    </div>

                    <div class="col-start-1 col-end-7 text-gray font-bold opacity-75">
                        May 2017 &#8211; Aug 2017
                    </div>
                    <div class="col-start-1 col-end-7 md:col-end-5">
                        <div class="flex flex-col">
                            <div class="font-bold">
                                IT Technician assistant, Trainee 
                            </div>
                            <div class="mb-4">
                                ComputerXpress Sdn. Bhd.
                            </div>
                            <p class="mb-4">
                                Provide technical support to users, both on-site and remotely, resolving hardware, software, and network issues. Work with other IT professionals, such as system administrators, network engineers, and developers, to ensure seamless IT operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- tech/skills -->
                <div class="flex flex-col col-start-1 col-end-13 md:col-end-5 t-s-4">
                    <div class="text-gray font-bold opacity-50">
                        Tech / Skills
                    </div>
                </div>
                <div class="flex grid grid-cols-6 grid-rows-6 col-start-1 col-end-13 items-center md:items-start md:col-start-5 md:gap-2 md:grid-row-2 t-s-4">
                    <div class="col-start-1 row-start-1 col-end-7 row-end-2 md:col-end-3 text-gray font-bold">
                        Programming Languages
                    </div>
                    <div class="col-start-1 row-start-3 col-end-7 row-end-4 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2 text-gray font-bold">
                        Framework
                    </div>
                    <div class="col-start-1 col-end-7 md:col-start-5 md:col-end-7 text-gray font-bold">
                        DBMS
                    </div>
                    <p class="col-start-1 row-start-2 col-end-7 row-end-3 md:col-end-3">
                        Html, CSS/SCSS, javascript/jQuery, Bootstrap, Xamarin
                    </p>
                    <p class="col-start-1 row-start-4 col-end-7 row-end-5 md:col-start-3 md:row-start-2 md:col-end-5 md:row-end-3">
                        C#.Net, PHP Laravel, VueJS
                    </p>
                    <p class="col-start-1 row-start-6 col-end-7 row-end-7 md:col-start-5 md:row-start-2 md:col-end-7 md:row-end-3">
                        MySQL, SQL Server
                    </p>
                </div>
            </div>
        </div>
    </Transition>
</template>

<template>
    <div class="w-full bg-indigo-900 bg-opacity-85">
        <div class="container mx-auto flex flex-row-reverse md:flex-row">
            <div class="w-1/2 md:w-full flex flex-col items-center justify-center">
                <div class="p-4 md:my-20 space-y-5">
                    <div class="text-center text-white"><span class="font-bold text-2xl md:text-5xl font-Ubuntu">ABOUT ME</span></div>
                    <div class="text-justify">
                        <span class="text-justify text-xs md:text-base font-light text-gray-300 tracking-tight font-NotoSerif">
                            {{ text }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="w-1/2 md:w-0 md:hidden">
                <img class="w-full md:hidden" src="../assets/profile-web4-tp.png" width="" alt="profile">
            </div>
        </div>
    </div>
</template>

<script setup>
const text = "I am a dedicated web developer and programmer, committed to continuous self-improvement and contributing to organizational growth. I thrive in collaborative environments, embracing flexibility and adaptability. My passion lies in developing modern websites using cutting-edge tools, and I am constantly seeking innovative ways to express my creativity.";
</script>

<style lang="scss" scoped>

</style>
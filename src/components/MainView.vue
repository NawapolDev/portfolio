<template>
    <div class="w-full bg-white">
        <div class="bg-no-repeat bg-[url('/src/assets/profile-header.png')]">
            <div class="container mx-auto flex flex-col md:flex-row">
                <div class="w-full md:w-1/2 flex flex-col justify-center p-10">
                    <div class="md:space-y-6">
                        <h4 class="text-xl md:text-4xl text-indigo-600">I'm</h4>
                        <h1 class="text-3xl md:text-5xl text-black font-bold">Ball Nawapol R.</h1>
                        <div class="w-max font-Ubuntu">
                            <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-2xl md:text-5xl text-black font-bold">Web <span class="text-[#f1b55b]">Developer</span> 💻</h1>
                        </div>
                    </div>
                    <div class="mt-12 space-x-6 flex">
                        <!-- <button class="px-6 py-4 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white">Download CV</button> -->
                        <DownloadCV :refFile="CVFile" :refName="'Resume'" />
                        <a class="rounded-lg border py-4 px-3 border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all duration-150" href="../Resume.jpg" target="_blank"><i class="fa-solid fa-eye"></i></a>
                    </div>
                </div>
                <div class="static w-full md:w-1/2 flex justify-between md:justify-center items-center">
                    <!-- <div class="md:hidden p-4 font-Ubuntu">
                        <span class="font-bold text-2xl">ABOUT ME</span>
                        <br/>
                        <span class="text-pretty font-light text-gray-500 tracking-tight">
                            Hi, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, itaque! 
                        </span>
                    </div> -->
                    <div class="relative hidden md:flex w-[450px] justify-center items-center">
                        <img class="hidden md:block w-[450px]" src="../assets/profile-web-bg.png" alt="profile">
                        <img 
                            :src="currentImage"
                            :key="currentImage"
                            class="absolute inset-0 object-cover w-[450px] transition-opacity duration-1000 ease-in-out"
                            :class="fadeState"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import DownloadCV from "./DownloadCV.vue";
import image1 from '../assets/profile-web1-tp.png';
import image2 from '../assets/profile-web5-tp.png';
import image3 from '../assets/profile-web3-tp.png';
import image4 from '../assets/profile-web4-tp.png';

const CVFile = '../Resume.pdf';
const images = [
    image1,
    image2,
    image3,
    image4,
];

const currentImageIndex = ref(0);
const fadeState = ref('opacity-0');

// Compute the current image based on the index
const currentImage = computed(() => images[currentImageIndex.value]);

// Function to change the image with both fade-out and fade-in effect
const changeImage = () => {
  // Start fade-out
  fadeState.value = 'opacity-0';  // Fade out the current image

  // fade in
  setTimeout(() => {
    fadeState.value = 'opacity-100';
  }, 500);
  // fade out
  setTimeout(() => {
    fadeState.value = 'opacity-0'; // Fade out the image
  }, 3500); // 3 seconds after the image is fully visible

  // After the fade-out completes, change to the next image
  setTimeout(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 4500); // Time after fade-out (3500ms + 1000ms for fade-out duration)
};

// Run the changeImage function every 5 seconds
onMounted(() => {
    changeImage();
    setInterval(changeImage, 5000); // Change image every 5 seconds
});

</script>

<style scoped>
/* Ensure the transition works properly */
img {
  transition: opacity 1s ease-in-out;
}
</style>
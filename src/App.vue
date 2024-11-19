<template>
  <header class="fixed top-0 w-full font-Ubuntu z-50">
    <nav class="max-w-7xl mx-auto h-[10dvh] hidden md:flex items-center justify-center">
      <ul class="flex flex-row gap-10">
        <li v-for="items in navigation" :key="items">
          <a :href="items.link">{{ items.text }}</a>
        </li>
      </ul>
    </nav>
  </header>
  <main class="mt-0 bg-teal-500">
    <main-view id="home" class=" shadow-xl" />
    <div class=" bg-transparent h-[40dvh]"></div>
    <about-view id="about" />
    <experience-view id="experience" />
  </main>
  <footer class="w-full py-10 font-Ubuntu bg-indigo-950">
    <div class="max-w-7xl mx-auto flex items-center justify-center text-center">
      <div class="text-white"><span>Copyright {{ currentDate }}</span></div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import moment from 'moment';
import MainView from './components/MainView.vue';
import AboutView from './components/AboutView.vue';
import ExperienceView from './Views/ExperienceView.vue';
// import HelloWorld from './components/HelloWorld.vue';

const navigation = [
        { link:'#home', text:'Home' },
        { link:'#about', text:'About me' },
        { link:'#skills', text:'Skills' },
        { link:'#project', text:'Project' },
        { link:'#contact', text:'Contact' },
]

const currentDate = ref(getCurrentTime());
let intervalId;

function getCurrentTime() {
  return moment().format('HH:mm:ss');
}

onMounted(()=> {
  intervalId = setInterval(() => {
      currentDate.value = getCurrentTime();
    }, 1000);
})

onBeforeUnmount(()=> {
  clearInterval(intervalId);
})


</script>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->

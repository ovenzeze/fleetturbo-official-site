<template>
  <section class="hero-section relative h-screen flex items-center justify-center overflow-hidden max-w-[100vw] mx-auto">
    <div class="absolute inset-0  z-10 bg-opacity-60 bg-black"></div>
    <NuxtImg
      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      alt="Global logistics network"
      class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
      :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }"
      @load="onImageLoad"
    />
    <div class="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
      <h1
        class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-loose transform translate-y-10 opacity-0 transition-all duration-1000 ease-out delay-300 text-gradient bg-gradient-to-r from-blue-400 via-blue-200 to-fuchsia-400 bg-clip-text text-transparent"
        :class="{ 'translate-y-0 opacity-100': contentVisible }"
      >
        Why Choose FleetTurbo
      </h1>
      <p
        class="text-xl md:text-xl mb-20 max-w-3xl mx-auto leading-relaxed transform translate-y-10 opacity-0 transition-all duration-1000 ease-out delay-300 text-gradient bg-gradient-to-r from-blue-300 via-blue-100 to-fuchsia-300 bg-clip-text text-transparent"
        :class="{ 'translate-y-0 opacity-100': contentVisible }"
      >
        Your Reliable Partner in Logistics <br /> Delivering Efficiency, Speed, and Savings Across the Globe
      </p>
      <div
        class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 transform scale-95 opacity-0 transition-all duration-1000 ease-out delay-600"
        :class="{ 'scale-100 opacity-100': contentVisible }"
      >
        <UButton
          color="primary"
          size="xl"
          class="font-bold px-8 py-4 text-lg"
        >
          Learn More
        </UButton>
        <UButton
          color="white"
          variant="outline"
          size="xl"
          class="font-bold px-8 py-4 text-lg"
        >
          Get a Quote
        </UButton>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 z-20 flex justify-center pb-8">
      <Icon
        name="ph:arrow-down-bold"
        class="text-white text-4xl animate-bounce cursor-pointer"
        @click="scrollToNextSection"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const imageLoaded = ref(false)
const contentVisible = ref(false)

const onImageLoad = () => {
  imageLoaded.value = true
}

onMounted(() => {
  setTimeout(() => {
    contentVisible.value = true
  }, 100)
})

const scrollToNextSection = () => {
  const nextSection = document.querySelector('.hero-section').nextElementSibling
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  background-color: #1a202c; /* Fallback color */
}

@media (max-width: 640px) {
  .hero-section {
    background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80');
    background-size: cover;
    background-position: center;
  }
}
</style>

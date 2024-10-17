<template>
  <section class="benefits-section min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto px-4 py-12">
      <h2
        class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white transform transition-all duration-700 ease-out"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        Why FleetTurbo?
      </h2>
      <p
        class="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transform transition-all duration-700 ease-out delay-100"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        Choose FleetTurbo for unparalleled logistics solutions that drive your business forward.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="benefit-card p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-500 ease-out transform"
          :class="{
            'translate-y-0 opacity-100': isVisible,
            'translate-y-20 opacity-0': !isVisible,
            'hover:scale-105': isVisible
          }"
          :style="{ transitionDelay: `${index * 100 + 200}ms` }"
        >
          <Icon :name="benefit.icon" class="text-4xl mb-4 text-primary-600 dark:text-primary-400" />
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ benefit.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const benefits = [
  {
    icon: 'ph:money',
    title: 'Cost-Saving Solutions',
    description: 'Reduce your shipping expenses by up to 40% with our optimized logistics network.'
  },
  {
    icon: 'ph:lightning',
    title: 'Speed Solutions',
    description: 'Enjoy next-day local delivery and 2-5 days nationwide shipping for faster operations.'
  },
  {
    icon: 'ph:clock',
    title: 'On-Time Solutions',
    description: 'Rely on our 99.8% on-time delivery rate for punctual and dependable service.'
  },
  {
    icon: 'ph:truck',
    title: 'Large Volume Capacity',
    description: 'Handle peak seasons effortlessly with our network of over 300 drivers across coverage areas.'
  },
  {
    icon: 'ph:headset',
    title: 'Exceptional Support',
    description: 'Access dedicated customer support teams available 24/7 to assist with your inquiries.'
  },
  {
    icon: 'ph:tree',
    title: 'Eco-Friendly Options',
    description: 'Choose green shipping alternatives to reduce your carbon footprint and support sustainability.'
  }
]

const isVisible = ref(false)

const checkVisibility = () => {
  const element = document.querySelector('.benefits-section')
  if (element) {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    isVisible.value = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
  }
}

onMounted(() => {
  checkVisibility()
  window.addEventListener('scroll', checkVisibility)
  window.addEventListener('resize', checkVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility)
  window.removeEventListener('resize', checkVisibility)
})
</script>

<style scoped>
.benefit-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease, transform 0.5s ease;
}

@media (prefers-reduced-motion: reduce) {
  .benefit-card, h2, p {
    transition: none;
  }
  .benefit-card:hover {
    transform: none;
  }
}
</style>

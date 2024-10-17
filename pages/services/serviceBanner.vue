<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  banner: {
    type: Object,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})
const banner = computed(() => props.banner)
const isVisible = computed(() => props.isVisible)
</script>

<template>
  <div class="service-banner h-screen w-full flex items-center justify-center transition-all duration-300"
       :class="{ 'opacity-0 translate-y-10': !isVisible, 'opacity-100 translate-y-0': isVisible }"
       style="transition: all 0.7s ease-out;">
    <div class="relative w-full h-full overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center opacity-30 filter bg-blend-color-dodge"
           style="background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=cover&w=1350&q=80');"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
        <div class="max-w-6xl mx-auto text-center">
          <h1 class="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-gradient bg-gradient-fire dark:bg-gradient-forest">
            {{ banner.title }}
          </h1>
          <p class="text-lg md:text-2xl mb-6 md:mb-10 text-text-secondary/80">
            {{ banner.subtitle }}
          </p>
          <UButton
            color="gray"
            variant="solid"
            size="lg"
            class="font-bold px-4 py-3 md:py-5 rounded-full"
          >
            <Icon name="ph:phone-call-bold" class="w-5 h-6 bg-gradient-fire" />
            <span class="text-gradient bg-gradient-fire text-base md:text-lg">{{ banner.button.text }}</span>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 1s ease infinite;
}

.dark .bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}
</style>

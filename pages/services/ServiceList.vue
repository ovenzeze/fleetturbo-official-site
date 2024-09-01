<script setup lang="ts">
import { usePageWording } from '../../composables/pageWording';

const { services } = usePageWording();

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="service-list"
       :class="{ 'opacity-0 translate-y-10': !isVisible, 'opacity-100 translate-y-0': isVisible }"
       style="transition: all 0.7s ease-out;">
    <section class="py-12 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">{{ services.title }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services.list" :key="index" class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

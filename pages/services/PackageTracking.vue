<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  tracking: {
    description: string;
  };
}>();

const trackingNumber = ref('');
const showMap = ref(false);

const trackPackage = () => {
  if (trackingNumber.value) {
    showMap.value = true;
  }
};
</script>

<template>
  <section>
    <UCard>
      <template #header>
        <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Package Tracking</h2>
      </template>
      <p class="text-secondary mb-4">{{ tracking.description }}</p>
      <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 mb-4">
        <UInput v-model="trackingNumber" placeholder="Enter tracking number" class="flex-grow" />
        <UButton color="primary" @click="trackPackage">Track</UButton>
      </div>
      <ClientOnly>
        <div v-if="showMap" class="relative h-64 rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Map" class="w-full h-full object-cover" />
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full animate-ping"></div>
        </div>
      </ClientOnly>
    </UCard>
  </section>
</template>